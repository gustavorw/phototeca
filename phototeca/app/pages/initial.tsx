import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { fetchPhotos } from "../controllers/photo_controller";
import { photoStore } from "../stores/photo_store";
import { useCallback, useEffect } from "react";
import { Photo } from "../models/photo";
import ListPhoto from "../components/listPhoto";
import AppBar from "../components/appBar";

export default function Initial() {



    return (
        <View style={{ alignItems: "center", backgroundColor: "#FFF", flex: 1, justifyContent: 'center' }}>
            <AppBar />
            <ListPhoto />
        </View>
    );
}