import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';

import Profile from './Profile'
import DashBoard from './DashBoard';
import Feed from './Feed';
import AddPost from './AddPost';
import Chat from './Chat';

import { connect } from 'react-redux';
import { logoutUser } from '../actions/user';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();


class BottomNavigator extends Component {
    render() {
        let {themeColor} = this.props
        return (
            <Tab.Navigator
                initialRouteName="DashBoard"
                tabBarOptions={{
                    activeTintColor: themeColor,
                    labelStyle: {
                        display: 'none'
                    },
                    swipeEnabled: true,
                }}
            >
                <Tab.Screen
                    name="DashBoard"
                    component={DashBoard}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="clone" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={Feed}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="search" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="AddPost"
                    component={AddPost}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="plus-square" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Messages"
                    component={Chat}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="comment" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="User"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="users" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
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

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigator);