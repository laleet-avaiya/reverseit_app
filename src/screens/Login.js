import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import { connect } from 'react-redux';

import { loginUser } from '../actions/user';


class Login extends Component {
  render() {
    let { title } = this.props;
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>
          {title}
        </Text>
        <Button
          onPress={() => this.props.login("test")}
          containerStyle={styles.button}
          titleStyle={styles.buttonText}
          type="clear"
          title="Log In"
        />
      </View>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(loginUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);