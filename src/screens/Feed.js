import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Button, Image, Text, Card, SearchBar, Header } from 'react-native-elements';
import { connect } from 'react-redux';


import { logoutUser } from '../actions/user';

class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        let { postList, title, themeColor } = this.props;
        let { search } = this.state;

        return (
            <View style={styles.container}>
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle="light-content" // or directly
                    leftComponent={{ text: 'Search ... ', style: { color: '#fff', width: 500, fontWeight: 'bold', fontSize: 16, } }}
                    containerStyle={{
                        backgroundColor: themeColor,
                        justifyContent: 'space-around',
                    }}>
                </Header>
                <ScrollView >
                    {postList.map((post) => {
                        return (
                            <Card key={post.id}>
                                <Text>{post.title}</Text>
                                <Text>{post.postOn}</Text>
                            </Card>
                        )

                    })}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 2
    },
    card: {
        borderColor: 'grey',
        borderBottomWidth: 1,
        // margin: 2
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
        postList: state.postReducer.postList,
        title: state.postReducer.title,
        userLogedIn: state.userReducer.userLogedIn,
        themeColor: state.userReducer.themeColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);