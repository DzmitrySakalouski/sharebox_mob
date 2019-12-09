import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Divider, Text, Avatar, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { setCurrentTrack } from '../../store/actions';

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

export const TrackCardComponent = props => {
    const { name, createdAt, updatedAt, id, creator, demos, gtp, comments } = props.track;

    const getDateString = dateItem => {
        const date = new Date(dateItem);

        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} / ${date.getHours()}:${date.getMinutes()}`;
    }

    const setCurrentTrack = () => {
        props.setCurrentTrack(id);
        props.navigation.navigate('Track', {
            trackName: name
        });
    }

    const getCreator = creator => {
        const c = creator.split(' ');
        return `${c[0][0]}${c[1][0]}`
    }

    return (
        <>
            <View style={styles.constainer}>
                <Text h4>{name}</Text>
                <Avatar rounded title={getCreator(creator)} />
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.detailsItem}>Created at: {getDateString(createdAt)}</Text>
                <Text style={styles.detailsItem}>Updated at: {getDateString(updatedAt)}</Text>
                <Text style={styles.detailsItem}>Demos: {demos.length}</Text>
                <Text style={styles.detailsItem}>GTP: {gtp.length}</Text>
                <Text style={styles.detailsItem}>Comments: {comments.length}</Text>
                <Button containerStyle={styles.buttonContainer} buttonStyle={styles.button} title="Подробнее" onPress={setCurrentTrack}/>
            </View>
            <Divider />
        </>
    );
}

const mapStateToProps = state => ({
    navigation: state.nav.navigation
});

const mapDispatchToProps = ({
    setCurrentTrack: id => setCurrentTrack(id)
})

export const TrackCard = connect(mapStateToProps, mapDispatchToProps)(TrackCardComponent);