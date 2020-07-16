import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';

import { connect } from 'react-redux';
import { updateWait } from '../actions/user';

class Home extends Component {

    componentDidMount() {
        setTimeout(() => this.props.wait(false), 3000)
    }

    render() {
        const { navigation, title } = this.props;
        return (
            <View style={styles.container}>
                <Image
                    source={require('./assets/logo.png')}
                    resizeMode='stretch'
                    style={{ width: 250, height: 40 }}
                    containerStyle={{ alignSelf: 'center'}}
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
        // marginTop: '10%',
        // marginHorizontal: '5%',
    }
});

const mapStateToProps = (state) => {
    return {
        title: state.postReducer.title,
        userLogedIn: state.userReducer.userLogedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        wait: (wait) => dispatch(updateWait(wait)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);