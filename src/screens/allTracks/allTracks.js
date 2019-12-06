import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { setNavigation, setUser } from '../../store/actions';
import firebase from 'react-native-firebase';
import { Logo, HeaderMenu } from '../../components/headerItems';

export class AllTracksScreenComponent extends React.Component {
    componentDidMount() {
        const { navigation, setNavigation, setUser } = this.props;
        setNavigation(navigation);

        const { currentUser } = firebase.auth();
        setUser(currentUser);
    }

    static navigationOptions = {
        headerTitle: () => <Logo />,
        headerRight: () => <HeaderMenu />,
    };

    render() {
        return (
            <View>
                <Text>All TRACKS</Text>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setNavigation: navigation => setNavigation(navigation),
    setUser: user => setUser(user)
});

export const AllTracksScreen = connect(null, mapDispatchToProps)(AllTracksScreenComponent);
