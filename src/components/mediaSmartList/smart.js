import React from 'react';
import { MediaList } from './';


export const renderSmartList = (typeId, trackData) => {
    const lists = {
        '0': () => <MediaList items={trackData.gtp} />,
        '1': () => <MediaList items={trackData.demos} />,
        '2':  () =>  <MediaList items={trackData.media} />,
    }

    return lists[typeId];
}