/**
 * Created by wangdi on 6/11/16.
 * 框架的body部分
 */
'use strict';

import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import theme from '../config/theme';
import computeTime from '../util/computeTime';
import NetURL from '../net/NetURL';
import NetUtil from '../net/NetUtil';
import Toutiao from './Toutiao';
import WechatChoice from './WechatChoice';
import Xiaohua from './Xiaohua';
import Xiaohua2 from './Xiaohua2';
import LaoHL from './LaoHL';
import ChengYCD from './ChengYCD';

export default class HomeTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            loadedData: false,
            dataBlob: [],
            jsonData: '',
        };
    }

    componentDidMount() {


        this._fetchData();
    }

    render() {
        return (
            <ScrollView
                refreshControl={
            <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={this._onRefresh.bind(this)}
        colors={['red','#ffd500','#0080ff','#99e600']}
        tintColor={theme.themeColor}
        title="Loading..."
        titleColor={theme.themeColor}
            />
                }>
                { this._renderContents() }
            </ScrollView>
        );
    }

    _mainView() {
        var {tabTag} = this.props;
        if (tabTag === '成语词典') {
            return (  <View style={{flex:1}}>
                    { this._renderContents() }
                </View>
            );
        } else {
            return (
                <ScrollView
                    refreshControl={
            <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={this._onRefresh.bind(this)}
        colors={['red','#ffd500','#0080ff','#99e600']}
        tintColor={theme.themeColor}
        title="Loading..."
        titleColor={theme.themeColor}
            />
                }>
                    { this._renderContents() }
                </ScrollView>
            );
        }
    }

    _renderContents() {

        if (!this.state.refreshing || this.state.loadedData) {
            return (
                <View>
                    {
                        this._addMiddleView()
                    }
                </View>
            );
        }
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this._fetchData();
    }

    _getCurrentTime() {
        function convertTime(time) {
            if (time <= 9)
                return '0' + time;
            return time;
        }

        var date = new Date();
        return date.getFullYear() + '-' + convertTime(date.getMonth() + 1) + '-' + convertTime(date.getDate()) + 'T' + convertTime(date.getHours()) + ':' + convertTime(date.getMinutes()) + ':' + convertTime(date.getSeconds() + '.' + date.getMilliseconds() + 'Z');
    }

    _addMiddleView() {
        var {tabTag} = this.props;
        if (tabTag === '新闻头条') {

            return (<View>
                {<Toutiao navigator={this.props.navigator} title='dd'
                          contents={this.state.jsonData}
                />}
            </View>);
        } else if (tabTag === '微信精选') {
            return ( <View>
                {<WechatChoice navigator={this.props.navigator} title='aa'
                               contents={this.state.jsonData}
                />}
            </View>);
        } else if (tabTag === '笑话大全') {
            return ( <View>
                {<Xiaohua2 navigator={this.props.navigator} title='aa'
                           contents={this.state.jsonData}
                />}
            </View>);
        } else if (tabTag === '老黄历') {
            return ( <View>
                {<LaoHL navigator={this.props.navigator} title='aa'
                        contents={this.state.jsonData}
                />}
            </View>);
        } else if (tabTag === '成语词典') {
            return ( <View>
                {<ChengYCD navigator={this.props.navigator} title='aa'

                />}
            </View>);
        }

    }

    _parseNetData(data) {
        var {tabTag} = this.props;
        if (NetUtil.ERROR === data) {
            alert("网络异常");
        } else {
            if (tabTag === "成语词典") {
                // alert("_parseNetData="+data);
            }
            this.setState({
                jsonData: data,
                loadedData: true,
                refreshing: false
            });
        }
    }

    _fetchData() {
        var {tabTag} = this.props;
        if (tabTag === '新闻头条') {
            var map = {"type": "shehui"};
            NetUtil.get(NetURL.toutiao_url, map, this._parseNetData.bind(this));
        } else if (tabTag === '微信精选') {
            var map = {"pno": "1", "ps": "30"};
            NetUtil.get(NetURL.wechat_url, map, this._parseNetData.bind(this));
        } else if (tabTag === '笑话大全') {
            var timestamp = new Date().getTime();//时间戳
            timestamp = timestamp + "";
            var map = {"page": "1", "pagesize": "30", "time": timestamp.substr(0, 10)};
            NetUtil.get(NetURL.xiaohua_url, map, this._parseNetData.bind(this));
        } else if (tabTag === '老黄历') {

            var map = {"date": "2017-01-07"};
            NetUtil.get(NetURL.laohl_url, map, this._parseNetData.bind(this));
        } else if (tabTag === '成语词典') {
            // var map={"dtype":"json","word":"狐假虎威"};
            // NetUtil.get(NetURL.chengycd_url,map,this._parseNetData.bind(this));

            this.setState({
                loadedData: true,
                refreshing: false
            });
        }


    }
}
