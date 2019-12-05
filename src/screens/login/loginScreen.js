import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text } from 'react-native-elements';

export const LoginScreen = (props) => {
    return (
        <View  style={styles.container}>
            <ImageBackground source={{ uri: 'https://dvmzgq36yy8ja.cloudfront.net/wp-content/uploads/2018/07/Hellfest-Open-Air-Festival.jpg' }} style={styles.imageBack}/>
            <View>
                {/* <Text h3>Sign In</Text> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageBack: {
        width: '100%',
        height: '70%'
    },
    container: {
        flex: 1,
        justifyContent: 'space-between'
    }
});