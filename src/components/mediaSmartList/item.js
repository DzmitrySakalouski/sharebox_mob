import React, { useState } from 'react'
import { View, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import firebase from 'react-native-firebase';
import RNFetchBlob from 'react-native-fetch-blob';

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

export const MediaItem = props => { // todo
    const { name, ref } = props.item;

    const handleDownloadFile = () => {
        const storage = firebase.storage().refFromURL('gs://mob-dby.appspot.com');
        storage.child(ref).getDownloadURL().then(url => {
            const uStr = storage.child(ref).path.split('/');
            
            PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            ], {
                title: 'Permission',
                message: 'We need your permission.',
            }).then(permRes => {
                if (permRes['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
                    permRes['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED) {
                        RNFetchBlob
                            .config({
                                fileCache : true,
                                addAndroidDownloads: {
                                    useDownloadManager: true,
                                    path : RNFetchBlob.fs.dirs.DownloadDir + '/' + uStr[uStr.length - 1],
                                    notification: true
                                }
                            })
                            .fetch('GET', url, {})
                            .then((res) => {
                                console.log('The file saved to ', res.path())
                            });
                }
            })
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