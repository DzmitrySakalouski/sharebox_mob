import React from 'react'

export const MediaList = props => {
    const { items } = props;

    return items.map(item => {
        return (
            <MediaItem key={item.id} {...item}/>
        );
    })
}