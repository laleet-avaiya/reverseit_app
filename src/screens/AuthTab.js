import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import Login from './Login';
import Signup from './Signup';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { connect } from 'react-redux';
import { logoutUser } from '../actions/user';

const Tab = createMaterialTopTabNavigator();


class AuthTab extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="login" component={Login} />
                <Tab.Screen name="signup" component={Signup} />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
  
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthTab);