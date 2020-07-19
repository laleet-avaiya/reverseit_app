import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar, TextInput, ToastAndroid } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';

import Firebase from '../Firebase'
import { connect } from 'react-redux';
import { loginUser } from '../actions/user';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailError: false,
            email: '',
            passwordError: false,
            password: '',
            secure: true,
            error: false,
            errorMessage: '',
            icon: 'Show'
        };
    }

    setEmail = (data) => {
        this.setState({ email: data })
    }

    loginRequest = () => {
        let email = this.state.email;
        Firebase.auth().sendPasswordResetEmail(email).then(() => {
            ToastAndroid.showWithGravityAndOffset(
                "Password reset link sent.",
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            )
            this.setState({ email: '' });
        }).catch(error => {
            ToastAndroid.showWithGravityAndOffset(
                JSON.parse(JSON.stringify(error)).message,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            )
        })
    }


    render() {
        let { title, themeColor } = this.props;
        let { emailError, email, errorMessage, error } = this.state;
        return (

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
                <Button
                    onPress={() => this.loginRequest()}
                    buttonStyle={{ backgroundColor: themeColor }}
                    containerStyle={styles.button}
                    titleStyle={styles.buttonText}
                    title="Reset"
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    button: {
        marginTop: '10%',
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
        marginTop: "-30%",
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "#ffffff",
    },
    emailInputLayout: {
        marginHorizontal: 16,
        flex: 1,
        color: "#222222",
        paddingStart: 16,
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



export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);