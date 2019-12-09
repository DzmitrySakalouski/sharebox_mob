import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { HeaderDrawer } from '../../components/headerDrawer/headerDrawer';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/core';
import firebase from 'react-native-firebase';
import Axios from 'axios';
import { BASE_URL } from '../../common';
import { getAllTracks } from '../../store/actions';
import moment from 'moment'

const styles = StyleSheet.create({
    formItem: {
        marginTop: 20,
    },
    btnGroup: {
        flex: 0,
        flexDirection: 'row',
        padding: 7,
        justifyContent: 'space-around'
    },
    btnContainer: {
        width: '40%'
    }
});

class NewTrackComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isLoading: false
        }

        console.log(moment().format('LL'))
    }

    onGoBack = () => {
        this.props.navigation.navigate("Home");
    }

    onSaveNewTrack = () => {
        const date = moment().format('LL');
        const params = {
            createdAt: new Date(),
            updatedAt: new Date(),
            creator: this.props.user.name,
            name: this.state.name
        };
        console.log(params);
        this.setState({ isLoading: true })
        Axios.post(BASE_URL + '/createNewTrack', params).then(() => {
            this.setState({ isLoading: false })
            this.props.navigation.navigate("Home")
        }).then(() => this.props.getAllTracks());
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View>
                    <HeaderDrawer onGoBack={this.onGoBack} />
                    <Input placeholder="Введите название" containerStyle={styles.formItem} value={this.state.name} onChangeText={text => this.setState({ name: text})} />
                </View>
                
                <View style={styles.btnGroup}>
                    <Button buttonStyle={{ backgroundColor: '#3f51b5' }} containerStyle={styles.btnContainer} disabled={!this.state.name} onPress={this.onSaveNewTrack} title="Сохранить"/>
                    <Button buttonStyle={{ backgroundColor: '#FF0000' }} containerStyle={styles.btnContainer} onPress={this.onGoBack} title="Отмена"/>
                    { this.state.isLoading && 
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator /> 
                        </View>
                    }
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    navigation: state.nav.navigation,
    user: state.user.user
});

const mapDispatchToProps = dispatch => ({
    getAllTracks
})

export const NewTrack = connect(mapStateToProps, mapDispatchToProps)(NewTrackComponent)
