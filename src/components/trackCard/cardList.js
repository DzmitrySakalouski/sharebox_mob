import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TrackCard } from './card';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export const TrackList = props => {
    return (
        <ScrollView>
            {
                props.tracks.map(item => {
                    return (
                        <TrackCard key={item.id} track={item} />
                    )
                })
            }
        </ScrollView>
    )
}