import React from 'react';
import { Icon } from 'react-native-elements';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation-drawer';

const styles = StyleSheet.create({
    icon: {
        marginHorizontal: 15
    }
});

const HeaderMenuComponent = props => {
    const onIconPress = () => {
        props.navigation.dispatch(DrawerActions.toggleDrawer());
    };

    return (
        <TouchableOpacity onPress={onIconPress}>
            <Icon color="white" containerStyle={styles.icon} size={29} name="more-vert"/>
        </TouchableOpacity>
    )
};

const mapStateToProps = state => ({
    navigation: state.nav.navigation
});

export const HeaderMenu = connect(mapStateToProps)(HeaderMenuComponent);
