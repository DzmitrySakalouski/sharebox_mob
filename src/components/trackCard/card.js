import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Divider, Text, Avatar, Button } from 'react-native-elements';

const styles = StyleSheet.create({
    constainer: {
        padding: 20,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    detailsContainer: {
        padding: 15
    },
    button: {
        backgroundColor: '#3f51b5',
    },
    buttonContainer: {
        margin: 20
    },
    detailsItem: {
        marginVertical: 10,
    }
});

export const TrackCard = props => {
    const { name, createdAt, updatedAt, creator, demos, gtp, comments } = props.track;
    const getDateString = date => {
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} / ${date.getHours()}:${date.getMinutes()}`;
    }

    return (
        <>
            <View style={styles.constainer}>
                <Text h4>{name}</Text>
                <Avatar rounded title={creator} />
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.detailsItem}>Created at: {getDateString(createdAt)}</Text>
                <Text style={styles.detailsItem}>Updated at: {getDateString(updatedAt)}</Text>
                <Text style={styles.detailsItem}>Demos: {demos}</Text>
                <Text style={styles.detailsItem}>GTP: {gtp}</Text>
                <Text style={styles.detailsItem}>Comments: {comments}</Text>
                <Button containerStyle={styles.buttonContainer} buttonStyle={styles.button} title="Подробнее" onPress={() => alert(name)}/>
            </View>
            <Divider />
        </>
    );
}