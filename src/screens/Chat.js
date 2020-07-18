import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Button, Image, Text, Header } from 'react-native-elements';
import { connect } from 'react-redux';


import { logoutUser } from '../actions/user';

class Chat extends Component {
    render() {
        let {themeColor} = this.props;
        return (
            <View>
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle="light-content" // or directly
                    leftComponent={{ text: 'Messages', style: { color: '#fff', width: 500, fontWeight: 'bold', fontSize: 16, } }}
                    containerStyle={{
                        backgroundColor: themeColor,
                        justifyContent: 'space-around',
                    }}></Header>
                <Text style={{ textAlign: 'center' }}>
                    Welcome to Chat Page
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    imageContainer: {
        marginTop: '10%',
        marginHorizontal: '5%',
    },
    button: {
        marginTop: 10,
        marginHorizontal: '15%',
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: 'green',
        borderWidth: 1
    },
    buttonText: {
        color: 'green',
        margin: 5,
        fontSize: 14,
        fontWeight: '700'
    },
});

const mapStateToProps = (state) => {
    return {
        title: state.postReducer.title,
        userLogedIn: state.userReducer.userLogedIn,
        themeColor: state.userReducer.themeColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);