import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { signupUser } from '../actions/user';


class Signup extends Component {
  render() {
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>
          Welcome to Signup Page
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
  return {
    title: state.postReducer.title,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signupUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);