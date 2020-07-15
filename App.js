import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import postReducer from './src/reducers/postReducer';
import { deletePost } from './src/actions/food';
import WelcomeScreen from './src/WelcomeScreen/WelcomeScreen';

class App extends Component {
  render() {
    return (
      <View style={{height: "100%"}}>
        <Text style={{textAlign:'center'}}>{this.props.title}</Text>
        <WelcomeScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
  return {
    post: state.postReducer.postList,
    title: state.postReducer.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (key) => dispatch(deletePost(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);