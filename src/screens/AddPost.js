import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar, TextInput, ToastAndroid } from 'react-native';
import { Button, Image, Text, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import DocumentPicker from 'react-native-document-picker';

import { connect } from 'react-redux';
import { logoutUser } from '../actions/user';
import { addPost } from '../actions/post';

import firestore from '@react-native-firebase/firestore';


class AddPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            location: '',
            docs: []
        };
    }

    setTitle = (data) => {
        this.setState({ title: data })
    }

    setDescription = (data) => {
        this.setState({ description: data })
    }

    uploadFiles = async () => {
        try {
            const results = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.allFiles],
            });
            for (const res of results) {
                this.state.docs.push(res.uri, res.type, res.name, res.size);
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
                //   console.log(err)
            } else {
                throw err;
            }
        }
    }

    addPost = () => {
        let post = {
            title: this.state.title,
            location: this.state.location,
            description: this.state.description,
            postOn: Date().toLocaleString(),
            docs: this.state.docs
        }

        firestore()
            .collection('Posts')
            .add(post)
            .then((response) => {
                postId = response._documentPath._parts[1]
                this.setState({ title: '', location: '', description: '', docs: [] })
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
    }

    setLocation = (data) => {
        this.setState({ location: data })
    }

    componentDidMount = () => { }

    render() {
        let { title, description, location } = this.state;
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

                <ScrollView>
                    <View style={[styles.mainContainer, { paddingTop: 20 }]}>
                        <Text style={[styles.labelStyle]}>Title</Text>
                        <View style={styles.titleSection}>
                            <TextInput
                                style={[styles.titleInputLayout, styles.normalBorder]}
                                value={title}
                                label="Title"
                                autoCapitalize="sentences"
                                placeholder="Title"
                                keyboardType="default"
                                onChangeText={text => this.setTitle(text)} />
                        </View>

                        <Text style={[styles.labelStyle]}>Location</Text>
                        <View style={styles.titleSection}>
                            <TextInput
                                style={[styles.titleInputLayout, styles.normalBorder]}
                                value={location}
                                label="Location"
                                placeholder="City, Country"
                                autoCapitalize="sentences"
                                keyboardType="default"
                                onChangeText={text => this.setLocation(text)} />
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
                            title={[<Icon name="paperclip" color={"white"} size={16} /> , "  Attachments"]}
                            titleStyle={{fontSize:12}}
                            buttonStyle={{ backgroundColor: "grey" }}
                            containerStyle={styles.button}
                            containerStyle={{ width: 120, margin:15 , alignSelf: 'flex-end'}}
                            onPress={this.uploadFiles}
                        > </Button>
                        
                        <Button
                            onPress={this.addPost}
                            buttonStyle={{ backgroundColor: themeColor }}
                            containerStyle={styles.button}
                            titleStyle={styles.buttonText}
                            // type="clear"
                            title="Post"
                        />

                    </View>
                </ScrollView>
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