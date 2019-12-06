import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TrackCard } from './card';
const tracks = [
    {
        createdAt: new Date(),
        updatedAt: new Date(),
        creator: "СШ",
        demos: 2,
        gtp: 3,
        comments: 5,
        id: 'd;slk;ls333lc;lmcms',
        name: 'Track156'
    },
    {
        createdAt: new Date(),
        updatedAt: new Date(),
        creator: "СШ",
        demos: 2,
        gtp: 3,
        comments: 5,
        id: 'd;slk;lslc;444lmcms',
        name: 'Track14'
    },
    {
        createdAt: new Date(),
        updatedAt: new Date(),
        creator: "СШ",
        demos: 2,
        gtp: 3,
        comments: 5,
        id: 'd;slk;lslcdd;lmcms',
        name: 'Track13'
    },
    {
        createdAt: new Date(),
        updatedAt: new Date(),
        creator: "СШ",
        demos: 2,
        gtp: 3,
        comments: 5,
        id: 'd;slk;lssdslc;lmcms',
        name: 'Track12'
    },
];

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