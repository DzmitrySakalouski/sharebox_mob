import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppNavigator } from './homeScreen';
import { NewTrack } from '../newTrack/newTrack';
import { createAppContainer } from 'react-navigation';
import { SideMenu } from '../../components/sideMenu/SideMenu';

export const MainScreen = createDrawerNavigator({
    Home: {
        screen: AppNavigator
    },
    NewTrack: {
        screen: NewTrack
    }
}, {
    contentComponent: SideMenu
});

export default createAppContainer(MainScreen);