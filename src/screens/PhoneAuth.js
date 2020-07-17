import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar, TextInput } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

import { loginUser } from '../actions/user';

class PhoneAuth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneError: false,
            phone: '',
        };
    }

    setPhone = (data) => {
        this.setState({ phone: data })
    }


    render() {
        let { title, themeColor } = this.props;
        let { phone, phoneError } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.mainContainer}>
                    <Text style={styles.labelStyle}>Phone</Text>
                    <View style={styles.phoneSection}>
                        <TextInput
                            style={phoneError ? [styles.phoneInputLayout, styles.errorBorder] : [styles.phoneInputLayout, styles.normalBorder]}
                            value={phone}
                            label="Phone"
                            autoCapitalize="none"
                            keyboardType="number-pad"
                            onChangeText={text => this.setPhone(text)} />
                    </View>

                    <Text
                        visible={phoneError ? true : false}
                        type="error">{phoneError}</Text>


                    <Button
                        onPress={() => this.props.login({ phone: phone })}
                        buttonStyle={{ backgroundColor: themeColor }}
                        containerStyle={styles.button}
                        titleStyle={styles.buttonText}
                        // type="clear"
                        title="Send OTP"
                    />

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    button: {
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
    phoneInputLayout: {
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
        marginTop: 16
    },
    phoneSection: {
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

export default connect(mapStateToProps, mapDispatchToProps)(PhoneAuth);