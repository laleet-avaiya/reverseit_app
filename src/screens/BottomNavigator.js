import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import Profile from './Profile'
import DashBoard from './DashBoard';
import Feed from './Feed';
import AddPost from './AddPost';
import Chat from './Chat';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

class BottomNavigator extends Component {
    render() {
        let { themeColor } = this.props
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
});

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigator);