import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    titleContainer: {
        marginHorizontal: 20,
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    }
});

export const Logo = props => (
    <View style={styles.titleContainer}>
        <Text style={styles.title}>SECOND WORLD</Text>
    </View>
)