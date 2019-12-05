import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export const LoginScreen = (props) => {
    return (
        <View  style={styles.container}>
            <ImageBackground source={{ uri: 'https://dvmzgq36yy8ja.cloudfront.net/wp-content/uploads/2018/07/Hellfest-Open-Air-Festival.jpg' }} style={styles.imageBack}/>
            <Icon name="archive" size={30} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    imageBack: {
        width: '100%',
        height: '50%'
    },
    container: {
        flex: 1,
        justifyContent: 'space-between'
    }
});