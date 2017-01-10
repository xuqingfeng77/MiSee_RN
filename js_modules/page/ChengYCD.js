/**
 * Created by xqf on 6/11/16.
 * 成语词典
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Navigator,ToastAndroid} from 'react-native';
import theme from '../config/theme';
import computeTime from '../util/computeTime';
import ListItem from '../component/ListItem';
import PhoneUtil from '../util/PhoneUtil';
import NewsWebView from './NewsWebview';
import NetURL from '../net/NetURL';
import NetUtil from '../net/NetUtil';
var ProgressBar = require('ProgressBarAndroid');
var aa=1;
export default class ChengYCD extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chengyInfo: null,
            txtChengYu: "",
            isShow: false,//是否显示解释成语的布局
        };
    }


    static propTypes = {
        title: PropTypes.string,
    };

    _parseData(data) {
        var tempArr = [];
        // alert(data);
        if ("error" === data) {
            // alert('数据异常110');
            return;
        }
        if (0 === JSON.parse(data).error_code) {
            tempArr = JSON.parse(data).result;
        } else {
            alert(JSON.parse(data).reason);
            return;
        }

        return tempArr;

    }

    _queryChengy() {
        this._fetchData();
    }

    _toWebView(data) {

        this.props.navigator.push({
            component: NewsWebView,
            params: {
                url: data,
            }

        })
    }

    _updateInputTxt(txt) {
        this.setState({
            txtChengYu: txt,
        })
    }

    _parseNetData(data) {
        aa=aa+1;
        // ToastAndroid.show(aa+"", ToastAndroid.SHORT);
        // alert(data);
        if ("error" === data) {
            alert("网络异常");
        } else {

            var temp = this._parseData(data);
            if (temp) {
                this.setState({
                     isShow:true,
                    chengyInfo: temp,

                });
            } else {
//为空的情况或是异常情况，上面以及alert处理，故这里不用处理
            }

        }
    }
    _fetchData() {
        var map = {"word": this.state.txtChengYu, "dtype": "json"};
        NetUtil.get(NetURL.chengycd_url, map, this._parseNetData.bind(this));
        // var map={"dtype":"json","word":"差强人意"};
        // NetUtil.get(NetURL.chengycd_url,map,this._parseNetData.bind(this));

    }


    render() {
        return (
            <View style={styles.container}>

                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center', marginTop:30}}>
                    <TextInput style={styles.txtInputStyle}   underlineColorAndroid="transparent" placeholder="请输入需要查询的成语"
                               onChange={(event) => this._updateInputTxt(event.nativeEvent.text)}
                    ></TextInput>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} activeOpacity={0.3}
                                      onPressIn={ this._queryChengy.bind(this)} >
                            <Text style={{color:'black',fontSize:20,marginLeft:10}}>查询</Text>

                    </TouchableOpacity>

                </View>
                {
                    (this.state.isShow ) ? (
                        <View style={{paddingLeft:50,paddingRight:100,paddingTop:40}}>
                            {
                                (this.state.chengyInfo.pinyin) ? (
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={[styles.txtHintStyle]}>拼音:</Text>
                                        <Text
                                            style={[styles.txtStyle,{marginLeft:10}]}>{this.state.chengyInfo.pinyin}</Text>
                                    </View>
                                ) : (null)
                            }
                            {
                                (this.state.chengyInfo.chengyujs) ? (<View style={{flexDirection:'row'}}>
                                    <Text style={[styles.txtHintStyle]}>成语解释:</Text>
                                    <Text
                                        style={[styles.txtStyle,{marginLeft:10}]}>{this.state.chengyInfo.chengyujs}</Text>
                                </View>) : (null)
                            }
                            {
                                (this.state.chengyInfo.from_) ? ( <View style={{flexDirection:'row'}}>
                                    <Text style={[styles.txtHintStyle]}>成语出处:</Text>
                                    <Text
                                        style={[styles.txtStyle,{marginLeft:10}]}>{this.state.chengyInfo.from_}</Text>
                                </View>) : (null)
                            }
                            {
                                (this.state.chengyInfo.example) ? ( <View style={{flexDirection:'row'}}>
                                    <Text style={[styles.txtHintStyle]}>举例:</Text>
                                    <Text
                                        style={[styles.txtStyle,{marginLeft:10}]}>{this.state.chengyInfo.example}</Text>
                                </View>) : (null)
                            }
                            {
                                (this.state.chengyInfo.yufa) ? ( <View style={{flexDirection:'row'}}>
                                    <Text style={[styles.txtHintStyle]}>语法:</Text>
                                    <Text
                                        style={[styles.txtStyle,{marginLeft:10}]}>{this.state.chengyInfo.yufa}</Text>
                                </View>) : (null)
                            }
                            {
                                (this.state.chengyInfo.ciyujs) ? (<View style={{flexDirection:'row'}}>
                                    <Text style={[styles.txtHintStyle]}>词语解释:</Text>
                                    <Text
                                        style={[styles.txtStyle]}>{this.state.chengyInfo.ciyujs}</Text>
                                </View>) : (
                                    null)
                            }
                            {
                                (this.state.chengyInfo.yinzhengjs) ? ( <View style={{flexDirection:'row'}}>
                                    <Text style={[styles.txtHintStyle]}>引证解释:</Text>
                                    <Text
                                        style={[styles.txtStyle,{padding:10}]}>{this.state.chengyInfo.yinzhengjs}</Text>

                                </View>) : (null)
                            }
                            {
                                (this.state.chengyInfo.tongyi) ? ( <View style={{flexDirection:'row'}}>
                                    <Text style={[styles.txtHintStyle]}>同义词:</Text>
                                    <Text
                                        style={[styles.txtStyle,{marginLeft:10}]}>{this.state.chengyInfo.tongyi[0]}</Text>
                                </View>) : (null)
                            }
                            {
                                (this.state.chengyInfo.fanyi) ? (
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={[styles.txtHintStyle]}>反义词:</Text>
                                        <Text
                                            style={[styles.txtStyle,{marginLeft:10}]}>{this.state.chengyInfo.fanyi[0]}</Text>
                                    </View>) : (null)
                            }

                        </View>
                    ) : (
                        null
                    )
                }


            </View>
        );
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    leftcontent: {
        flex: 1,
        marginLeft: 10,

    },
    listView: {},
    txtInputStyle: {
        height: 40,
        width: PhoneUtil.devWidth * 0.6,
        borderRadius: 12,
        borderColor: 'gray',
        borderWidth: 1,


    },
    txtHintStyle: {
        color: theme.anheiColor,
        fontWeight: 'bold',
        fontSize: 15,
    },
    txtStyle: {
        color: theme.anheiColor,
        fontSize: 15,
    }

});
