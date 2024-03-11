import { View, Image, useWindowDimensions } from "react-native";

type CardPhotoProps = {
    img: string,

}

export default function CardPhoto({ img }: CardPhotoProps) {
    const window = useWindowDimensions();

    return (<View style={{ padding: 8 }} >
        <Image source={{ uri: img }} style={{ resizeMode: 'contain', height: 200, width: 280, borderRadius: 8 }} />
    </View>)
}