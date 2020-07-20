import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';

import AuthTab from './src/screens/AuthTab';
import ForgotPassword from './src/screens/ForgotPassword';
import BottomNavigator from './src/screens/BottomNavigator';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { connect } from 'react-redux';
import { deletePost } from './src/actions/post';
import Home from './src/screens/Home';
// import { Buffer } from 'buffer';
// global.Buffer = Buffer; // very important


const Stack = createStackNavigator();

class App extends Component {
  render() {
    let { userLogedIn, title, wait } = this.props;
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {!wait && <Stack.Screen name="Welcome" component={Home} options={{ title: 'Welcome', headerShown: false }} />}
          {userLogedIn ? (
            <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{ title: 'Welcome', headerShown: false }} />
          ) : (
              <>
                <Stack.Screen name="AuthTab" component={AuthTab} options={{ title: 'Welcome', }} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Reset Password', }} />
              </>
            )
          }
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
    userLogedIn: state.userReducer.userLogedIn,
    wait: state.userReducer.wait
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (key) => dispatch(deletePost(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);