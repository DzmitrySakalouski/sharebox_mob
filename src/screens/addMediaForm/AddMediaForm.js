import React, { useState } from 'react';
import { View, StyleSheet, Picker } from 'react-native';
import { Text, Icon, Button } from 'react-native-elements';

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

    const handlePickFile = () => {
        // RNFileSelector.Show({
        //     title: 'Select',
        //     onDone: res => console.log(res),
        //     onCancel: () => console.log('lklk')
        // })
        // RNFileSelector.Show(
        //     {
        //         title: 'Select File',
        //         onDone: (path) => {
        //             console.log('file selected: ' + path)
        //         },
        //         onCancel: () => {
        //             console.log('cancelled')
        //         }
        //     }
        // )
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
        </View>
    );
}