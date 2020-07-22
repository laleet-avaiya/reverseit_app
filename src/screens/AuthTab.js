import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import Login from './Login';
import Signup from './Signup';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { connect } from 'react-redux';

const Tab = createMaterialTopTabNavigator();

class AuthTab extends Component {
    render() {
        return (
            <Tab.Navigator backBehavior='none'>
                <Tab.Screen name="login" component={Login} />
                <Tab.Screen name="signup" component={Signup} />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthTab);