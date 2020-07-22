import React, { Component } from 'react';
import { View, StyleSheet, TextInput, ToastAndroid } from 'react-native';
import { Button, Text } from 'react-native-elements';

import { connect } from 'react-redux';
import { loginUser } from '../actions/user';

import auth from '@react-native-firebase/auth';

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

    resetRequest = () => {
        let email = this.state.email;

        if (email === "") {
            ToastAndroid.showWithGravityAndOffset(
                "Enter your email Address.",
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            )
            return;
        }

        auth().sendPasswordResetEmail(email).then(() => {
            ToastAndroid.showWithGravityAndOffset(
                "Password reset link sent.",
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            )
            this.setState({ email: '' });
        }).catch(error => {
            message = error.code;
            ToastAndroid.showWithGravityAndOffset(
                message,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            )
        })
    }


    render() {
        let { title, themeColor } = this.props;
        let { emailError, email} = this.state;
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
                    onPress={() => this.resetRequest()}
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
    return {}
}



export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);