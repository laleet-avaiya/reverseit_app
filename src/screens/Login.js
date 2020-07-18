import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar, TextInput } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';


import { connect } from 'react-redux';
import { loginUser } from '../actions/user';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailError: false,
      email: '',
      passwordError: false,
      password: '',
      secure: true,
      icon: 'Show'
    };
  }

  setEmail = (data) => {
    this.setState({ email: data })
  }

  setPassword = (data) => {
    this.setState({ password: data })
  }

  toggleIcon = () => {
    if (this.state.icon === "Show") {
      this.setState({ icon: "Hide", secure: false })
    } else {
      this.setState({ icon: "Show", secure: true })
    }
  }

  loginRequest = () => {
    let email = this.state.email;
    let password = this.state.password;
    const loginURL = "https://reqres.in/api/users?id=2";

    console.log("sent")
    axios.get(loginURL)
      .then((response) => {
        if (response.status == 200) {
          this.props.login(response.data)
        }
      }, (error) => {
        console.log(error);
      });
  }

  render() {
    let { title, themeColor } = this.props;
    let { emailError, email, password, passwordError, HelperText, secure, icon } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.mainContainer}>
          <Text style={styles.labelStyle}>Email</Text>
          <View style={styles.emailSection}>
            <TextInput
              style={emailError ? [styles.emailInputLayout, styles.errorBorder] : [styles.emailInputLayout, styles.normalBorder]}
              value={email}
              label="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={text => this.setEmail(text)} />
          </View>

          <Text
            visible={emailError ? true : false}
            type="error">{emailError}</Text>

          <Text style={styles.labelStyle}>Password</Text>
          <View style={passwordError ? [styles.passwordSection, styles.errorBorder] : [styles.passwordSection, styles.normalBorder]}>
            <TextInput
              style={styles.passwordInput}
              value={password}
              secureTextEntry={secure}
              onChangeText={text => this.setPassword(text)}
              autoCapitalize="none"
              icon={props => <Icon name="" {...props} />} />
            <Text style={styles.iconPassword} onPress={this.toggleIcon}>{icon}</Text>
          </View>

          <Text
            visible={passwordError ? true : false}
            type="error">{passwordError}</Text>

          <Text style={styles.forgotPassword} >Forgot password?</Text>

          <Button
            onPress={() => this.loginRequest()}
            buttonStyle={{ backgroundColor: themeColor }}
            containerStyle={styles.button}
            titleStyle={styles.buttonText}
            // type="clear"
            title="LogIn"
          />

        </View>

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
    marginTop: '50%',
    marginHorizontal: '5%',
    backgroundColor: 'white',
  },
  buttonText: {
    margin: 5,
    fontSize: 14,
    fontWeight: '700'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  emailInputLayout: {
    marginHorizontal: 16,
    flex: 1,
    color: "#222222",
    paddingStart: 16,
  },
  passwordInput: {
    marginHorizontal: 16,
    flex: 1,
    color: "#222222",
  },
  forgotPassword: {
    textAlign: "center",
    marginTop: '10%',
    fontSize: 16,
    color: '#23b4fc',
    fontWeight: 'bold'

  },
  normalBorder: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#c4c4c4",
    borderRadius: 8,
  },
  errorBorder: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#DD2C00",
    borderRadius: 8,
  },
  errorText: {
    fontSize: 16,
    color: "#FFDD2C00",
    marginTop: 16
  },
  labelStyle: {
    marginHorizontal: 16,
    fontSize: 16,
    marginTop: 16
  },
  iconPassword: {
    marginRight: 16,
    color: 'grey'
  },
  passwordSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 16,
    marginHorizontal: 16,
  },
  emailSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 16,
  },
  loginButton: {
    height: 40,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    backgroundColor: "#ffffff"
  }
});

const mapStateToProps = (state) => {
  return {
    title: state.postReducer.title,
    themeColor: state.userReducer.themeColor,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(loginUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);