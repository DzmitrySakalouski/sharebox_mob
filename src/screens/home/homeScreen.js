import React from 'react';
import { Text } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AllTracksScreen } from '../allTracks/allTracks';
import { TrackScreen } from '../trackScreen/trackScreen';

const AppNavigator = createStackNavigator({
    AllTracks: {
        screen: AllTracksScreen
    },
    Track: {
        screen: TrackScreen
    }
},
{
    initialRouteName: 'AllTracks',
    headerTitle: () => (<Text style={{ color: 'black' }}>Second World</Text>)
});

export const HomeScreen = createAppContainer(AppNavigator);