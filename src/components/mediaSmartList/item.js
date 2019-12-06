import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import firebase from 'react-native-firebase';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 0,
        flexDirection: "row",
        height: 100,
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    btn: {
        backgroundColor: '#3f51b5',
    },
    text: {
        fontSize: 20
    }
});

export const MediaItem = props => {
    const { name, ref } = props.item;
    const [blob, setBlob] = useState('')

    const handleDownloadFile = () => {
        const storage = firebase.storage();
        storage.child(ref).getDownloadURL().then(url => {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function (event) {
                var blob = xhr.response;
                const blobUrl = URL.createObjectURL(blob);
                setBlob(blobUrl);

            };
            xhr.open('GET', url);
            xhr.send();
        }).catch(err => console.log(err));
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>{name}</Text>
                <Button buttonStyle={styles.btn} title="Скачать" onPress={handleDownloadFile} />
            </View>
            <Divider />
        </>
    );

}