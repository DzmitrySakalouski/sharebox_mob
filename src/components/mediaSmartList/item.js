import React, { useState } from 'react'
import { View, Text, StyleSheet, PermissionsAndroid, Platform, ActivityIndicator } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import firebase from 'react-native-firebase';
import RNFS from 'react-native-fs';

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
    const [isDownloading, setDownloading] = useState(false);

    const handleDownloadFile = () => {
        setDownloading(true);
        const storage = firebase.storage().refFromURL('gs://mob-dby.appspot.com');
        storage.child(ref).getDownloadURL().then(url => {
            const uStr = storage.child(ref).path.split('/');
            
            Platform.OS === 'android' && PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            ], {
                title: 'Permission',
                message: 'We need your permission.',
            }).then(permRes => {
                if (permRes['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
                    permRes['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED) {
                        RNFS.downloadFile({
                            fromUrl: url,
                            toFile: `${RNFS.ExternalStorageDirectoryPath}/ ${uStr[uStr.length - 1]}`,
                        }).promise.then((r) => {
                            
                        }).finally(() => setDownloading(false));
                }
            });

            Platform.OS === 'ios' && RNFS.downloadFile({
                    fromUrl: url,
                    toFile: `${RNFS.DocumentDirectoryPath}/ ${uStr[uStr.length - 1]}`,
                }).promise.then((r) => {
                    console.log(r);
                }).finally(() => setDownloading(false));
        }).catch(err => console.log(err));
    };

    const renderPreloader = () => (
        <View style={{ flex: 0, height: 100, justifyContent: "center", alignItems: 'center'}}>
            <ActivityIndicator color="#3f51b5" />
        </View>
    );

    return (
        <>
            {
                isDownloading ? renderPreloader() : 
                <View style={styles.container}>
                    <Text style={styles.text}>{name}</Text>
                    <Button buttonStyle={styles.btn} title="Скачать" onPress={handleDownloadFile} />
                </View>
            }
            <Divider />
        </>
    );

}