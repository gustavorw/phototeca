import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { photoStore } from '../stores/photo_store'
import { fetchPhotos } from '../controllers/photo_controller'
import { Photo } from '../models/photo'
import CardPhoto from './cardPhoto'

export default function ListPhoto() {

    const { load, photos } = photoStore()

    const addPhotos = photoStore((state) =>
        state.addPhotos
    )

    const toggleLoad = photoStore((state) =>
        state.toggleLoad
    )


    const updateStatePhotos = (photos: Photo[]) => {
        addPhotos(photos);
        toggleLoad();
    }

    const start = useCallback(async () => {
        await fetchPhotos("curated", updateStatePhotos)
    }, [fetchPhotos])




    useEffect(() => {
        start()
    }, [])

    return (
        <View style={{ padding: 10 }}>
            {load ? <ActivityIndicator />
                : <FlatList

                    data={photos}
                    renderItem={({ item }) => <CardPhoto img={item.src.tiny} />}
                    keyExtractor={item => item.id.toString()}
                />}
        </View>
    )
}