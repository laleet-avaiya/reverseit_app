import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar, TextInput, ToastAndroid } from 'react-native';
import { Button, Image, Text, Header } from 'react-native-elements';
import { connect } from 'react-redux';
import uuid from 'react-native-uuid';

import Firebase from '../Firebase'
import { logoutUser } from '../actions/user';
import { addPost } from '../actions/post';

class AddPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };
    }

    setTitle = (data) => {
        this.setState({ title: data })
    }

    setDescription = (data) => {
        this.setState({ description: data })
    }

    addPost = () => {

        const id = uuid.v4()
        let post = {
            id: id,
            title: this.state.title,
            description: this.state.description,
            attachment: "url",
            postOn: Date().toLocaleString()
        }

        Firebase.firestore()
            .collection('Posts')
            .doc(id)
            .set(post)
            .then(() => {
                ToastAndroid.showWithGravityAndOffset(
                    "Posts added!",
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                )
            }).catch(() => {
                ToastAndroid.showWithGravityAndOffset(
                    "Try again!",
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                )
            })
        // this.props.addPost(post)

    }

    componentDidMount = () => { }

    render() {
        let { title, description } = this.state;
        let { themeColor } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle="light-content" // or directly
                    leftComponent={{ text: 'Post Your Needs', style: { color: '#fff', width: 500, fontWeight: 'bold', fontSize: 16, } }}
                    containerStyle={{
                        backgroundColor: themeColor,
                        justifyContent: 'space-around',
                    }}
                />
                <View style={[styles.mainContainer, { paddingTop: 20 }]}>
                    <Text style={[styles.labelStyle]}>Title</Text>
                    <View style={styles.titleSection}>
                        <TextInput
                            style={[styles.titleInputLayout, styles.normalBorder]}
                            value={title}
                            label="Title"
                            autoCapitalize="sentences"
                            keyboardType="default"
                            onChangeText={text => this.setTitle(text)} />
                    </View>

                    <Text style={[styles.labelStyle]}>Description</Text>
                    <View style={styles.titleSection}>
                        <TextInput
                            style={[styles.titleInputLayout, styles.normalBorder]}
                            value={description}
                            label="Description"
                            keyboardType="default"
                            autoCapitalize="sentences"
                            multiline
                            editable
                            numberOfLines={10}
                            onChangeText={text => this.setDescription(text)} />
                    </View>


                    <Button
                        onPress={this.addPost}
                        buttonStyle={{ backgroundColor: themeColor }}
                        containerStyle={styles.button}
                        titleStyle={styles.buttonText}
                        // type="clear"
                        title="Post"
                    />

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    button: {
        marginTop: '20%',
        marginHorizontal: '5%',
        backgroundColor: 'white',
    },
    labelStyle: {
        marginHorizontal: 16,
        fontSize: 16,
        marginTop: 16,
        fontWeight: 'bold'
    },
    titleSection: {
        flexDirection: 'row',
        justifyContent: 'center',

        backgroundColor: '#fff',
        marginTop: 16,
    },
    titleInputLayout: {
        marginHorizontal: 16,
        flex: 1,
        color: "#222222",
        paddingStart: 16,
        textAlignVertical: "top"
    },
    normalBorder: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#c4c4c4",
        borderRadius: 2,
    },
});

const mapStateToProps = (state) => {
    return {
        title: state.postReducer.title,
        userLogedIn: state.userReducer.userLogedIn,
        themeColor: state.userReducer.themeColor,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);