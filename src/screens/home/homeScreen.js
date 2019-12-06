import React from 'react';
import { Text } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AllTracksScreen } from '../allTracks/allTracks';
import { TrackScreen } from '../trackScreen/trackScreen';
import { Logo, HeaderMenu } from '../../components/headerItems';

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
    headerTitle: () => <Logo />,
    headerRight: () => <HeaderMenu />,
});

export const HomeScreen = createAppContainer(AppNavigator);
