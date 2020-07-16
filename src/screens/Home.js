import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';

import { connect } from 'react-redux';

class Home extends Component {


    render() {
        const { navigation, title } = this.props;
        return (
            <View style={styles.container}>
                {/* <Text style={{ textAlign: 'center' }}>{title}</Text> */}
                <Image
                    source={require('./assets/logo.png')}
                    resizeMode='stretch'
                    style={{ width: 250, height: 40 }}
                    containerStyle={{ alignSelf: 'center', marginBottom: '50%' }}
                />
                <Button
                    onPress={() => navigation.navigate('Login')}
                    containerStyle={styles.button}
                    titleStyle={styles.buttonText}
                    type="clear"
                    title="Log In"
                />
                <Button
                    onPress={() => navigation.navigate('Signup')}
                    containerStyle={styles.button}
                    titleStyle={styles.buttonText}
                    type="clear"
                    title="Sign Up"
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
        // login: (user) => dispatch(loginUser(user)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);