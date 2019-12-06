import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { ButtonGroup } from 'react-native-elements';

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#3f51b5',
    },
    btnColor: {
        color: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: '#3f51b5',
    }
});

export class TrackScreenComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: 1
        }
    }

    updateIndex = selectedId => {
        this.setState({ selectedId });
    }

    componentDidMount() {
        console.log('TrackScreenComponent', this.props)
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('trackName', 'Track'),
        };
    };

    renderContent = () => {
        const { selectedId } = this.state;
    }

    render() {
        const buttons = ['GTP', 'Demos', 'Media']
        const { selectedIndex } = this.state
        return (
            <View style={styles.container}>
                <ButtonGroup
                    buttonStyle={styles.btn}
                    textStyle={styles.btnColor}
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{ height: 50 }}
                />
                <ScrollView>
                    {
                        this.renderContent()
                    }
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    currentTrack: state.trackData.currentTrack
})

export const TrackScreen = connect(mapStateToProps)(TrackScreenComponent);