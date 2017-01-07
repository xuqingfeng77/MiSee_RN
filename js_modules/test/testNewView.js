/**
 * Created by xqf on 6/11/16.
 * 透明的遮罩层
 */
'use strict';

import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, RefreshControl,Image} from 'react-native';
import PageComponent from '../page/BackPageComponent'

import NavigationBar from '../component/SimpleNavigationBar';
import px2dp from '../util/px2dp';
export default class testPop extends PageComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    _toNewView(){


    }

    render() {
        return (
            <View style={styles.view}>
                <Image style={styles.imgBtn} ></Image>
                <Text style={
                    {marginTop:px2dp(49),marginLeft:100,width:100,height:50,color:'red'}
                } onPress={this._toNewView.bind(this)}>显示透明层</Text>

            </View>
        );
    }

}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#ffffff',
        opacity:0,
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
    },
    imgBtn: {
        width: px2dp(49),
        height: px2dp(49)
    },


});

