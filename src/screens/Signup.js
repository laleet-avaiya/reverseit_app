import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import postReducer from '../reducers/postReducer';
import { deletePost } from '../actions/food';


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
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);