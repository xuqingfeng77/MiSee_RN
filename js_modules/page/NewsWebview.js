/**
 * Created by xqf
 * 新闻头条
 */
'use strict';

import React, {Component,PropTypes} from 'react';
import {View,WebView,Text,StyleSheet} from 'react-native';
import PageComponent from './BackPageComponent'
import NavigationBar from '../component/SimpleNavigationBar';


export default class NewsWebview extends PageComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        super.componentDidMount();
    }
    componentWillUnmount() {
        super.componentWillUnmount();
    }

    render() {
        return (

            <View style={styles.view}>
                <NavigationBar title="详细报道" backOnPress={this._handleBack.bind(this)}/>
                <WebView
                    style={styles.webView}
                    source={{uri:this.props.url}}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true} />
            </View>

        );
    }

}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'rgb(208, 218, 227)'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }

});
