import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import { connect } from 'react-redux';


import { logoutUser } from '../actions/user';

class Profile extends Component {
    render() {
        let { avatar, email, first_name, last_name } = this.props.user;
        return (
            <View>
                <Text style={{ textAlign: 'center' }}>Welcome</Text>
                <Image
                    source={{uri: avatar}}
                    resizeMode='stretch'
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                    containerStyle={{ alignSelf: 'center'}}
                />
                <Text>{first_name + " "+ last_name}</Text>
                <Text>{email}</Text>
                
                <Button
                    onPress={() => this.props.logout()}
                    containerStyle={styles.button}
                    titleStyle={styles.buttonText}
                    type="clear"
                    title="Logout"
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