import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';

import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { connect } from 'react-redux';
import { deletePost } from './src/actions/post';


const Stack = createStackNavigator();

class App extends Component {
  render() {
    let { userLogedIn, title } = this.props;
    return (
      <NavigationContainer>
        <Stack.Navigator>
          { userLogedIn ? (
          <>
            <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
          </>
          ) : (
            <>
            <Stack.Screen name="Welcome" component={Home} options={{ title: 'Welcome' }} />
            <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
            <Stack.Screen name="Signup" component={Signup} options={{ title: 'Signup' }} />
            </>
        ) }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
  return {
    post: state.postReducer.postList,
    title: state.postReducer.title,
    userLogedIn: state.userReducer.userLogedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (key) => dispatch(deletePost(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);