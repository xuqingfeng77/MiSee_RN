/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Text, View, StyleSheet, Platform, TouchableOpacity,Image} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';

export default class ListItem extends Component{
    static propTypes = {
        title: PropTypes.string,
        author_name: PropTypes.string,
        date: PropTypes.string,
        img_url: PropTypes.string
    };

    static defaultProps = {
        color: 'white',
        fontSize: px2dp(12)
    };

    render() {
        return (
            <View style={[styles.container,styles.height]}>
                {/*左边布局*/}
                <View style={[styles.leftcontent,styles.height]}>
                    {/*标题*/}
                    <Text style={{flex:1,color:theme.anheiColor,fontSize:17,marginTop:20}}>{this.props.title}</Text>
                    {/*作者和时间*/}
                    <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
                        <Text style={{color:theme.anheiColor,fontSize:12}}>{this.props.author_name}</Text>
                        <Text style={{color:'gray',fontSize:12,marginLeft:10}}>{this.props.date}</Text>
                    </View>
                </View>

                {/*右边图片*/}
                <View>
                    <Image style={{width:80,height:80,marginRight:10}} source={{uri:this.props.img_url}}></Image>
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    leftcontent:{
        flex:1,
        marginLeft:10,

    },
    height:{
        height:100,
    },

});