import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { useEffect, useReducer, useState } from 'react'
import { PhotoRepository } from '../repositories/photo_repository'
import { Photo } from '../models/photo'
import PhotoCard from '../components/photoCard'
import Loading from '../components/loading'
import InputSearch from '../components/inputSearch'


type PhotoState = {
    photos: Photo[],
    page: number,
    loading: boolean,
    error: Object | null,
}

type Action =
    {
        type: 'RESET_SEARCH',
        payload: {
            page: 1
        }
    } | {
        type: 'LOADING_SEARCH',
    } | {
        type: "SEARCH_PHOTOS",
        payload: {
            page: number,
            photos: Photo[],
        }
    } | {
        type: "LOADED_PHOTOS",
        payload: {
            page: number,
            photos: Photo[],
        }
    } | {
        type: "ERROR_PHOTOS",
        payload: {
            error: Object,
        }
    };


export default function Home() {
    const initialState: PhotoState = {
        photos: [],
        page: 1,
        loading: false,
        error: null
    }

    function reducer(state: PhotoState, action: Action): PhotoState {
        switch (action.type) {
            case 'RESET_SEARCH':
                return initialState;
            case 'LOADING_SEARCH':
                return {
                    ...state,
                    loading: true,
                };
            case 'LOADED_PHOTOS':
                return {
                    photos: [...state.photos, ...action.payload.photos],
                    page: action.payload.page,
                    loading: false,
                    error: null
                };
            case 'SEARCH_PHOTOS':
                return {
                    ...state,
                    loading: true,
                };
            case 'ERROR_PHOTOS':
                return {
                    loading: false,
                    error: action.payload.error,
                    photos: [],
                    page: 1,

                }
            default:
                return initialState
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const [searchTerm, setSearchTerm] = useState<string>('')


    const getCuratedPhotos = async () => {
        dispatch({ type: 'LOADING_SEARCH' })
        const response = await PhotoRepository.getPhotosByCurated(state.page)
        if (response) {
            dispatch({ type: 'LOADED_PHOTOS', payload: { photos: response.photos, page: response.page + 1 } },)
            return;
        }
        dispatch({ type: 'ERROR_PHOTOS', payload: { error: 'Ocorreu um erro na busca das fotos' } },)

    }

    useEffect(() => { getCuratedPhotos() }, [])


    return (
        <View style={style.container}>
            <InputSearch
                value={searchTerm}
                hint='Buscar fotos'
                onChange={(text) => setSearchTerm(text)}
                clearText={() => setSearchTerm('')}
                searchTerm={() => { }}
            />
            {state.loading && state.photos.length === 0 ?
                <Loading /> :
                <FlatList
                    onEndReachedThreshold={0.1}
                    onEndReached={getCuratedPhotos}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    columnWrapperStyle={{ gap: 8, flex: 1, justifyContent: 'space-around' }}
                    contentContainerStyle={{ gap: 8 }}
                    numColumns={2}
                    keyExtractor={(item, index) => `${item.id}-${index}`}
                    data={state.photos}
                    renderItem={({ item }) => (<PhotoCard url={item.src.medium} />)}
                    ListFooterComponent={<Loading />}
                />}

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: 8,
        // width: '100%'
    }
})