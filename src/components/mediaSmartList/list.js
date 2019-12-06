import React from 'react';
import { MediaItem } from './';
import { View } from 'react-native';

export const MediaList = props => {
    const { items } = props;
    console.log(items)

    return items.map(item => {
        return (
            <MediaItem key={item.id} item={item}/>
        );
    })
}