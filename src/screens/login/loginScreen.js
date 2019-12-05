import React, { useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import firebase from 'react-native-firebase';
import { Text, Input, Button } from 'react-native-elements';
import { common } from '../../common';

const styles = StyleSheet.create({
    imageBack: {
        width: '100%',
        height: '30%',
        flex: 0,
        resizeMode: 'stretch'
    },
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    containerForm: {
        flex: 1,
        alignItems: 'center'
    },
    formGroup: {
        width: '100%',
        paddingHorizontal: 50,
        marginBottom: 50
    },
    formItem: {
        marginTop: 20,
    },
    title: {
        height: 150
    }
});

export const LoginScreen = (props) => {
    const [email, setEmail] = useState('dmitry89sokol@gmail.com');
    const [password, setPassword] = useState('08061989');

    const logIn = () => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            console.log('hello');
        })
    }

    return (
        <View  style={styles.container}>
            <Image source={{ uri: 'https://dvmzgq36yy8ja.cloudfront.net/wp-content/uploads/2018/07/Hellfest-Open-Air-Festival.jpg' }} style={styles.imageBack}/>
            <View style={styles.containerForm}>
                <View style={[common.center, styles.title]}>
                    <Text style={common.fontRoboto} h3>Sign In</Text>
                </View>                
                <View style={styles.formGroup}>
                    <Input containerStyle={styles.formItem} value={email} placeholder="Email" onChangeText={text => setEmail(text)}/>
                    <Input containerStyle={styles.formItem} value={password} secureTextEntry={true} onChangeText={text => setPassword(text)} placeholder="Password"/>
                </View>
                <Button onPress={logIn} title="Sign In" />
            </View>
        </View>
    );
}