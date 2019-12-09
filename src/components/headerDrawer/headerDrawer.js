import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native';
import { Text, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#3f51b5',
        flexDirection: 'row',
        height: '50%',
        alignItems: 'center'
    },
    title: {
        color: 'white',
    },
    headerItem: {
        flexGrow: 1,
    },
});

class HeaderDrawerComponent extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <View style={{ height: 150, flex: 0, width: '100%', justifyContent: 'flex-end', backgroundColor: '#3f51b5',}}>
                <View style={styles.container}>
                    <View style={styles.headerItem}>
                        <Icon onPress={this.props.onGoBack.bind(this)} name="keyboard-backspace" size={29} color="white" />
                    </View>
                    <View style={styles.headerItem}>
                        <Text h3 style={styles.title}>Создать новый</Text>
                    </View>
                    <View style={styles.headerItem} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export const HeaderDrawer = connect(mapStateToProps, mapDispatchToProps)(HeaderDrawerComponent)
