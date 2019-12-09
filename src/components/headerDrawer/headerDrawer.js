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
        justifyContent: 'center'
    },
    title: {
        color: 'white',
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
                    <Text h3 style={styles.title}>Создать новый</Text>
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
