import React, { useState } from 'react';
import { View, StyleSheet, Picker, Platform } from 'react-native';
import { Text, Icon, Button } from 'react-native-elements';
import FilePickerManager from 'react-native-file-picker';
import DocumentPicker from 'react-native-document-picker';
import firebase from 'react-native-firebase';

const styles = StyleSheet.create({
    optionsBtn: {
        backgroundColor: "#3f51b5",
        marginVertical: 15
    },
    container: {
        flex: 1,
        padding: 10
    }
});

export const AddMediaForm = props => {
    const [selectedType, setSelectedType] = useState('');
    const [file, setFile] = useState(null);
    const storage = firebase.storage();

    const pickAndroid = () => {
        FilePickerManager.showFilePicker(null, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled file picker');
            }
            else if (response.error) {
                console.log('FilePickerManager Error: ', response.error);
            }
            else {
                const fileMap = {
                    uri: response.uri.toString(),
                    size: response.size,
                    name: response.fileName,
                    webkitRelativePath: "",
                    lastModifiedDate: new Date(),
                    lastModified: 1573557571788,
                    type: response.type
                }
                setFile(fileMap);
            }
        });
    }

    const pickIOS = () => {
        DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
        })
        .then(res => console.log(res))
        .catch((err) => {
            if (DocumentPicker.isCancel(err)) {
              // User cancelled the picker, exit any dialogs or menus and move on
            } else {
              console.log('Cancel')
            }
        });
    }

    const handlePickFile = () => {
        Platform.OS === 'android' ? pickAndroid() : pickIOS();
    }

    const handleUpload = () => {
        const ref = storage.ref();
        const dataRef = ref.child(`media/${file.name}`);
        dataRef.put(file.uri.toString()).then(() => alert('SUCCESS')).catch(err => alert('ERROR'))
    }

    return (
        <View style={styles.container}>
            <Text>Загрузить видео/фото/звукозапись</Text>
            <Picker
                selectedValue={selectedType}
                onValueChange={(itemValuse) => setSelectedType(itemValuse)}
            >
                <Picker.Item label="Audio" value={1} />
                <Picker.Item label="Video" value={2} />
                <Picker.Item label="Image" value={3} />
            </Picker>
            <Button onPress={handlePickFile} buttonStyle={styles.optionsBtn} title="Добавть файл" />
            {
                file && 
                <View>
                    <Text>File name: {file.name}</Text>
                    <Text>File size: {file.size}</Text>
                    <Button disabled={!file} onPress={handleUpload} buttonStyle={styles.optionsBtn} title="Загрузить" />
                </View>
            }
        </View>
    );
}