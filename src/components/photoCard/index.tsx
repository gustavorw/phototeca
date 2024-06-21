import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
type PhotoCardProps = {
    url: string,

}
export default function PhotoCard({ url }: PhotoCardProps) {
    const [favorite, setFavorite] = useState<boolean>(false)
    return (
        <View style={styles.container}>
            <View style={styles.action}>

                <View style={styles.icon}>
                    <Feather
                        name="download"
                        size={18}
                        color="black"
                    />
                </View>
                <View style={styles.icon}>
                    <FontAwesome
                        name={favorite ? 'heart' : 'heart-o'}
                        size={18}
                        color={favorite ? 'red' : 'black'}
                        onPress={() => setFavorite(!favorite)}
                    />
                </View>
            </View>

            <Image
                style={styles.image}
                source={{ uri: url }}
                contentFit="cover"
                blurRadius={8}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '48%',
        height: 220,
        position: 'relative'

    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,

    },
    action: {
        position: 'absolute',
        zIndex: 1,
        bottom: 6,
        right: 6,
        flexDirection: 'row',


    },
    icon: {
        marginLeft: 8,
        backgroundColor: 'white',
        borderRadius: 28,
        height: 28,
        width: 28,
        justifyContent: `center`,
        alignItems: 'center'
    }
});