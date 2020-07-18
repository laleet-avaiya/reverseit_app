import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import { connect } from 'react-redux';

import HorizontalLine from '../shared/HorizontalLine'

import { logoutUser } from '../actions/user';

class Profile extends Component {
    render() {
        let { avatar, email, first_name, last_name } = this.props.user;
        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={{ uri: avatar }}
                        resizeMode='stretch'
                        style={{ width: 75, height: 75, borderRadius: 50 }}
                        containerStyle={{ margin: 10 }}
                    />
                    <View style={{margin:20}}>
                    <Text style={{fontSize:20}}>{first_name + " " + last_name}</Text>
                    <Text style={{fontSize:20}}>{email}</Text>
                    </View>
                    
                </View>
                <HorizontalLine></HorizontalLine>
                <Text onPress={() => this.props.logout()} style={{ textAlign: 'left', marginLeft: 10,  fontSize: 15, fontWeight: 'bold' }}> Logout </Text>
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);