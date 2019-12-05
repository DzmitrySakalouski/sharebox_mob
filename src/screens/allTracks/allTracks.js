import React from 'react';
import { View, Text, Button } from 'react-native';

export class AllTracksScreen extends React.Component {
    static navigationOptions = {
        headerTitle: () => (
            <View>
                <Text>All TRACKS</Text>
            </View>
        ),
        headerRight: () => (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                // color="black"
            />
        ),
    };
    render() {
        return (
            <View>
                <Text>All TRACKS</Text>
            </View>
        );
    }
}

