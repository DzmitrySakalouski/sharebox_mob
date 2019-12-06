import React from 'react'
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';

export const MediaItem = props => {
    const { name, ref } = props;

    return items.map(item => {
        return (
            <View>
                <Text>{name}</Text>
                <Button title="Скачать" onPress={() => handleDownloadFile(ref)}/>
            </View>
        );
    })
}