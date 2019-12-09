import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { AllTracksScreen } from '../allTracks/allTracks';
import { TrackScreen } from '../trackScreen/trackScreen';
import { Logo, HeaderMenu } from '../../components/headerItems';

export const AppNavigator = createStackNavigator({
    AllTracks: {
        screen: AllTracksScreen,

    },
    Track: {
        screen: TrackScreen,
    }
},
    {
        initialRouteName: 'AllTracks',
        headerTitle: () => <Logo />,
        headerRight: () => <HeaderMenu />,

        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#3f51b5',
            },
            headerTintColor: 'white',
        }
    });
