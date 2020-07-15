import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';

const logo1 = ''

class WelcomeScreen extends Component {

    _onPressButton() {
        alert('You tapped the button!')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('./assets/logo.png')}
                    resizeMode='stretch'
                    style={{ width: 250, height: 40}}
                    containerStyle={{alignSelf:'center', marginBottom: '50%'}}
                />
                <Button
                    onPress={this._onPressButton}
                    containerStyle={styles.facebookButton}
                    titleStyle={styles.facebookButtonText}
                    type="clear"
                    title="Log In"
                />
                <Button
                    onPress={this._onPressButton}
                    containerStyle={styles.emailButton}
                    titleStyle={styles.emailButtonText}
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
    facebookButton: {
        marginTop: 10,
        marginHorizontal: '15%',
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: 'green',
        borderWidth: 1
    },
    emailButton: {
        marginTop: 10,
        marginHorizontal: '15%',
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: 'green',
        borderWidth: 1,
    },
    facebookButtonText: {
        color: 'green',
        margin: 5,
        fontSize: 14,
        fontWeight: '700'
    },
    emailButtonText: {
        color: 'green',
        margin: 5,
        fontSize: 14,
        fontWeight: '700'
    }
});
export default WelcomeScreen;