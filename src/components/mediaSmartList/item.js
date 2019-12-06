import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Button, Divider } from 'react-native-elements';

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

    const handleDownloadFile = () => {
        alert(ref);
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