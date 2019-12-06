import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';


export const TrackScreenComponent = (props) => {
    return (
        <View>
            <Text>{props.currentTrack.name}</Text>
        </View>
    );
}

const mapStateToProps = state => ({
    currentTrack: state.trackData.currentTrack
})

export const TrackScreen = connect(mapStateToProps)(TrackScreenComponent);