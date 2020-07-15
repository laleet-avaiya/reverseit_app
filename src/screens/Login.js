import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import postReducer from '../reducers/postReducer';
import { deletePost } from '../actions/food';


class Login extends Component {
  render() {
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>
          Welcome to Login Page
        </Text>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);