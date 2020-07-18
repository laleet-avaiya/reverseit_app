import React, { Component } from 'react';
import { View, StyleSheet, } from 'react-native';
import { connect } from 'react-redux';


class HorizontalLine extends Component {

    render() {
        let { postList, title } = this.props;
        return (
            <View style={styles.lineStyle} />
        );
    }
}

const styles = StyleSheet.create({
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
    }
});

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalLine);