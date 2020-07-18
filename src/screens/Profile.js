import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Button, Image, Text, Header } from 'react-native-elements';
import { connect } from 'react-redux';

import HorizontalLine from '../shared/HorizontalLine'

import { logoutUser } from '../actions/user';


const user = {
    "apiKey": "",
    "appName": "[DEFAULT]",
    "authDomain": "reverseit-65d8f.firebaseapp.com",
    "createdAt": "1595082311069",
    "displayName": null,
    "email": "",
    "emailVerified": false,
    "isAnonymous": false,
    "lastLoginAt": "",
    "multiFactor": {
        "enrolledFactors": [Array]
    },
    "phoneNumber": null,
    "photoURL": null,
    "providerData": [[Object]],
    "redirectEventId": null,
    "stsTokenManager": {
        "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIxODQ1OWJiYTE2NGJiN2I5MWMzMjhmODkxZjBiNTY1M2UzYjM4YmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmV2ZXJzZWl0LTY1ZDhmIiwiYXVkIjoicmV2ZXJzZWl0LTY1ZDhmIiwiYXV0aF90aW1lIjoxNTk1MDg0MDA1LCJ1c2VyX2lkIjoieTVubHVXczlTT2MxSVdNMURyT3lob0gzdldJMyIsInN1YiI6Ink1bmx1V3M5U09jMUlXTTFEck95aG9IM3ZXSTMiLCJpYXQiOjE1OTUwODQwMDUsImV4cCI6MTU5NTA4NzYwNSwiZW1haWwiOiJsbWF2YWl5YUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibG1hdmFpeWFAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.VHbPDao80It5ckuJ_bjRV83c_BDxyoq85eLELovJJyyftiefxaaxA3-J40jjrBXvmPU7ZRHBXLSJB0gkA_1XcNr97eKgP9tni5QDuPIC6JWwOB_olGQ9rQGNBUrYwR5BaOVinVRPqGKVtOv2umkq_JCh6lnaFlRuHaQWZ70EGk3mAFBDAIfcBwdT315sELyM24VU1aYZQM9cAh558b-Po_E9DKbC82_n4pZn5DkSUQ6W2wgHnAYyN_sFdFYQ0nCB7lsp4u1IqqPvmQYjcwwGuh5TitgDFE9dd2VMZNu6EGqWv5jvd8cT3oltAqfwya71CORq4w1zsViLsCmC7TUCBQ",
        "apiKey": "AIzaSyCbcegWx4YBiZMX3L1AFhAc8z52_q8PX4I",
        "expirationTime": 1595087605000,
        "refreshToken": "AE0u-NfJqnJP_FRIxSBh50zRumo8Pu9Av82JnMmdI4dkUelrMIK-DpD7HF2fKf3v480cssBUGc01PxvcLnYJxwNJ_l01GzwQdk0wRc8MNy_GTJRZ603HxLAEYG3dCPrOHs_a5b2PRJxvPGXjQMjfjJHlRCyVo2QNwc43L2i9w-pF-FpzbWlBecvrb_Kjt6QdfQdYfxHZxnEffJlGBpCZBhPeILd1qQzIHw"
    },
    "tenantId": null,
    "uid": "y5nluWs9SOc1IWM1DrOyhoH3vWI3"
}


class Profile extends Component {
    render() {
        let { uid, email, phoneNumber, displayName } = this.props.user;
        let { themeColor } = this.props;
        return (
            <View>
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle="light-content" // or directly
                    leftComponent={{ text: 'Account', style: { color: '#fff', width: 500, fontWeight: 'bold', fontSize: 16, } }}
                    containerStyle={{
                        backgroundColor: themeColor,
                        justifyContent: 'space-around',
                    }}></Header>

                <Text style={{ fontSize: 20 }}>{email}</Text>
                <Text style={{ fontSize: 20 }}>{uid}</Text>
                <HorizontalLine></HorizontalLine>
                <Text onPress={() => this.props.logout()} style={{ textAlign: 'left', marginLeft: 10, fontSize: 15, fontWeight: 'bold' }}> Logout </Text>
                <HorizontalLine></HorizontalLine>
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
    }
});

const mapStateToProps = (state) => {
    return {
        title: state.postReducer.title,
        userLogedIn: state.userReducer.userLogedIn,
        user: state.userReducer.user,
        themeColor: state.userReducer.themeColor,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);