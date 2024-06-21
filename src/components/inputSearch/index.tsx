import { View, Text, StyleSheet, TextInput } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';

type InputProps = {
    hint: string,
    value?: string,
    onChange: (value: string) => void,
    clearText: () => void
    searchTerm: () => void,
}

export default function InputSearch({
    hint,
    value,
    onChange,
    clearText,
    searchTerm
}: InputProps) {
    const [search, setSearch] = useState(false)
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={hint}
                value={value}
                onChangeText={(text) => {
                    if (text.length === 0) {
                        setSearch(true)
                    }
                    onChange(text);
                }} />

            {search ?
                <EvilIcons
                    name='search'
                    size={24}
                    onPress={() => {
                        if (value?.length !== 0) {
                            setSearch(false)
                        }
                        searchTerm();
                    }} />
                : <EvilIcons
                    name='close'
                    size={24}
                    onPress={() => {
                        setSearch(true);
                        clearText();
                    }} />
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        borderWidth: 0.4,
        height: 48,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: `row`,
        paddingHorizontal: 20,
        marginHorizontal: 16,
        marginVertical: 36

    },
    input: {
        width: '98%',
    },






})