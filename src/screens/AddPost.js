import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import { connect } from 'react-redux';


import { logoutUser } from '../actions/user';

class AddPost extends Component {
    render() {
        return (
            <View>
                <Text style={{ textAlign: 'center' }}>
                    Welcome to AddPost Page
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
        userLogedIn: state.userReducer.userLogedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);