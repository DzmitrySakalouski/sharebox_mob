// import React from 'react';
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
    initialRouteName: 'Track',
});

export const HomeScreen = createAppContainer(AppNavigator);