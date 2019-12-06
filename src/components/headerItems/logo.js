import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        marginHorizontal: 20
    }
});

export const Logo = props => (
    <View style={styles.title}>
        <Text>SECOND WORLD</Text>
    </View>
)