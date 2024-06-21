import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

type LoadingProps = {
    flex?: number | undefined
}

export default function Loading({ flex = 1 }: LoadingProps) {
    return (
        <View
            style={{
                flex: flex,
                justifyContent: 'center',
                flexDirection: `column`,
                paddingVertical: 12,
            }}>
            <ActivityIndicator animating={true} />
        </View>
    )
}