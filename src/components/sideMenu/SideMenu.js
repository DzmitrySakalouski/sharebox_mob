import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Text, Avatar, Divider, Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';

const styles = StyleSheet.create({
    container: {
        flex: 0,
        paddingTop: 45,
        flex: 1
    },
    userContainer: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25
    },
    userName: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    navItem: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    navTitle: {
        color: "#3f51b5",
        fontSize: 20,
        marginLeft: 30,
    },
    nav: {
        padding: 25,
        flexGrow: 3
    },
    logOutBtn: {
        backgroundColor: 'red'
    }
});

const icons = {
    Home: "music-note",
    NewTrack: "playlist-add"
};

export const SideMenuComponent = props => {
    const { user, items } = props;
    console.log('=> ', props);

    const signOut = () => {
        firebase.auth().signOut().then(() => {});
    }

    const handleLogOut = () => {
        Alert.alert('Уверены что хотите выйти?', 'Выход', [
            {
                text: 'Отмена',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'Выйти',
                onPress: () => signOut(),
            },
        ], {cancelable: true},);
    }

    return (
        user && user.name && user.photoUrl && <View style={styles.container}>
            <View style={styles.userContainer}>
                <Avatar
                    size={150}
                    rounded
                    source={{
                        uri: user.photoUrl
                    }}
                />
                <Text style={styles.userName}>{user.name}</Text>
            </View>
            <Divider />
            <View style={styles.nav}>
                {
                    items.map(item => (
                        <TouchableOpacity key={item.key}>
                            <View style={styles.navItem}>
                                <Icon size={30} name={icons[item.key]} color="#3f51b5" />
                                <Text style={styles.navTitle}>{item.routeName}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <Button onPress={handleLogOut} raised buttonStyle={styles.logOutBtn} title="Выйти"/>
        </View>
    );
};

const mapStateToProps = state => ({
    user: state.user.user
});

export const SideMenu = connect(mapStateToProps)(SideMenuComponent);
