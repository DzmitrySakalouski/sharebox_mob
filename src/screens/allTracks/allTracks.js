import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { setNavigation, setUser, getAllTracks } from '../../store/actions';
import firebase from 'react-native-firebase';
import { Logo, HeaderMenu, TrackList } from '../../components';

export class AllTracksScreenComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { navigation, setNavigation, setUser, getAllTracks } = this.props;
        const { currentUser } = firebase.auth();
        setNavigation(navigation);
        setUser(currentUser);
        getAllTracks();
    }

    static navigationOptions = {
        headerTitle: () => <Logo />,
        headerRight: () => <HeaderMenu />,
    };

    render() {
        const {tracks} = this.props;

        return (
            <TrackList tracks={tracks} />
        );
    }
}

const mapStateToProps = state => ({
    tracks: state.trackData.tracks
})

const mapDispatchToProps = ({
    setNavigation: navigation => setNavigation(navigation),
    setUser: user => setUser(user),
    getAllTracks: () => getAllTracks()
});

export const AllTracksScreen = connect(mapStateToProps, mapDispatchToProps)(AllTracksScreenComponent);
