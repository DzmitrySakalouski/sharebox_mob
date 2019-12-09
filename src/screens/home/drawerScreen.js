import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppNavigator } from './homeScreen';
import { NewTrack } from '../newTrack/newTrack';
import { createAppContainer } from 'react-navigation';

export const MainScreen = createDrawerNavigator({
    Home: {
        screen: AppNavigator
    },
    NewTrack: {
        screen: NewTrack
    }
});

export default createAppContainer(MainScreen);