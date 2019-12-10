import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { ButtonGroup, Icon } from 'react-native-elements';
import { MediaList } from '../../components/mediaSmartList';

const styles = StyleSheet.create({

    btnColor: {
        color: 'black',
    },
    selectedBtn: {
        backgroundColor: '#3f51b5',
    },
    container: {
        flex: 1,
    },
    icon: {
        padding: 10
    },
    iconContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export class TrackScreenComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: props.currentTrack.gtp,
            selectedIndex: 0
        }
    }

    componentDidMount() {
        console.log('TrackScreenComponent', this.props)
    }

    goToAddMediaForm = () => {
        this.props.navigation.navigate("AddMedia")
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('trackName', 'Track'),
        };
    };

    updateIndex = selectedId => {
        const { currentTrack } = this.props;
        this.setState({ selectedIndex: selectedId });
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
                    textStyle={styles.btnColor}
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    selectedButtonStyle={styles.selectedBtn}
                    containerStyle={{ height: 50 }}
                />
                <TouchableOpacity>
                    <View style={styles.iconContainer}>
                        <Icon onPress={this.goToAddMediaForm} color="#3f51b5" size={40} containerStyle={styles.icon} name="note-add" />
                        <Icon onPress={this.goToAddMediaForm} color="#3f51b5" size={40} containerStyle={styles.icon} name="message" />
                    </View>

                </TouchableOpacity>
                <ScrollView>
                    <MediaList items={this.state.items} />
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    currentTrack: state.trackData.currentTrack
})

export const TrackScreen = connect(mapStateToProps)(TrackScreenComponent);