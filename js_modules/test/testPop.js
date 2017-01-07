/**
 * Created by xqf on 6/11/16.
 * 测试popwindow效果
 */
'use strict';

import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import PageComponent from '../page/BackPageComponent'

import NavigationBar from '../component/SimpleNavigationBar';
import testNewView from '../test/testNewView';
import px2dp from '../util/px2dp';
export default class testPop extends PageComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    _toNewView(){


        this.props.navigator.push({
            component:testNewView,
            params: {
                url: 'www.baidu.com',
            }

        })
    }

    render() {
        return (
            <View style={styles.view}>
                <NavigationBar title="注册" backOnPress={this._handleBack.bind(this)}/>
                <Text style={
                    {width:400,height:100,color:'red'}
                } onPress={this._toNewView.bind(this)}>显示透明层显示透明层显示透明层显示透明层显示透明层显示透明层</Text>
                <Text style={
                    {color:'black'}
                } >Javascript中的继承一直是个比较麻烦的问题，prototype、constructor、__proto__在构造函数，实例和原型之间有的复杂的关系，不仔细捋下很难记得牢固。ES6中又新增了class和extends，和ES5搅在一起，加上平时很少自己写继承，简直乱成一锅粥。不过还好，画个图一下就清晰了，下面不说话了，直接上图，上代码。</Text>
                <Text style={
                    {marginTop:30,color:'black'}
                } >Javascript中的继承一直是个比较麻烦的问题，prototype、constructor、__proto__在构造函数，实例和原型之间有的复杂的关系，不仔细捋下很难记得牢固。ES6中又新增了class和extends，和ES5搅在一起，加上平时很少自己写继承，简直乱成一锅粥。不过还好，画个图一下就清晰了，下面不说话了，直接上图，上代码。</Text>

                <View style={
                    {width:450,height:400,color:'white',fontSize:20,position :'absolute',left:0,top:px2dp(49),backgroundColor:'rgba(0,0,0,0.1)'}
                }>

                    <Text style={
                    {color:'black',fontSize:30}
                } >北京
                \n上海
                \n广州
                \n深圳</Text>

                </View>

            </View>
        );
    }

}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#FFFFFF'
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

