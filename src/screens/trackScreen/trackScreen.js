import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { ButtonGroup, Icon } from 'react-native-elements';
import { MediaList } from '../../components/mediaSmartList';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#3f51b5',
    },
    btnColor: {
        color: 'white',
    },
    container: {
        flex: 1,
    },
    icon: {
        padding: 10
    }
});

export class TrackScreenComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: props.currentTrack.gtp
        }
    }

    componentDidMount() {
        console.log('TrackScreenComponent', this.props)
    }

    goToAddMediaForm = () => {

    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('trackName', 'Track'),
            headerRight: () => (
                <TouchableHighlight onPress={goToAddMediaForm}>
                    <Icon color="white" size={29} containerStyle={styles.icon} name="note-add"/>
                </TouchableHighlight>
            )
        };
    };

    updateIndex = selectedId => {
        const { currentTrack } = this.props;
        console.log('jkjkjk')
        switch (selectedId) {
            case 0:
                this.setState({ items: currentTrack.gtp });
                break;
            case 1:
                this.setState({ items: currentTrack.demos })
                break;
            case 2:
                this.setState({ items: currentTrack.media })
                break;
            default:
                break;
        }
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
                    <MediaList items={this.state.items}/>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    currentTrack: state.trackData.currentTrack
})

export const TrackScreen = connect(mapStateToProps)(TrackScreenComponent);