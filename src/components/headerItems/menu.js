import React from 'react';
import { Icon } from 'react-native-elements';
import { TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    icon: {
        marginHorizontal: 15
    }
});

export const HeaderMenu = props => {
    const onIconPress = () => {
        alert('Menu');
    };

    return (
        <TouchableOpacity onPress={onIconPress}>
            <Icon color="white" containerStyle={styles.icon} size={29} name="more-vert"/>
        </TouchableOpacity>
    )
};
