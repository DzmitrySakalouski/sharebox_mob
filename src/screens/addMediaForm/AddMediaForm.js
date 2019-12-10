import React, { useState } from 'react';
import { View, StyleSheet, Picker, Platform } from 'react-native';
import { Text, Icon, Button } from 'react-native-elements';
import FilePickerManager from 'react-native-file-picker';
import DocumentPicker from 'react-native-document-picker';

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
                setFile(response);
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
                    <Text>File name: {file.fileName}</Text>
                    <Text>File size: {file.size}</Text>
                    <Button onPress={handleUpload} buttonStyle={styles.optionsBtn} title="Загрузить" />
                </View>
            }
        </View>
    );
}