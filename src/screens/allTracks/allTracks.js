import React from 'react';
import { connect } from 'react-redux';
import { setNavigation, setUser, getAllTracks } from '../../store/actions';
import firebase from 'react-native-firebase';
import { Logo, HeaderMenu, TrackList } from '../../components';
import { View, ActivityIndicator } from 'react-native';

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

    renderLoader = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#3f51b5" />
            </View>
        );
    }

    render() {
        const { tracks } = this.props;

        return (            
            tracks && tracks.length ? <TrackList tracks={tracks} /> : this.renderLoader()
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
