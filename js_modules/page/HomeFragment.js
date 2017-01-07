/**
 * Created by xuqingfeng on 2016/12/28.
 * 主体框架
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform, ToastAndroid} from 'react-native';
import theme from '../config/theme';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from '../component/CustomTabBar';
import HomeTab from './HomeTab';
// import TabItemSwitcherPage from './TabItemSwitcherPage';

export default class HomeFragment extends Component{
    constructor(props){
        super(props);
        this.state = {
            tabNames: ['新闻头条','微信精选','笑话大全','老黄历','成语词典']
        };
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollableTabView
                    renderTabBar={() => <CustomTabBar pullDownOnPress={this._pullDownCallback.bind(this)}/>}
                    tabBarBackgroundColor="rgb(22,131,251)"
                    tabBarActiveTextColor="white"
                    tabBarInactiveTextColor="rgba(255,255,255,0.5)"
                    tabBarTextStyle={{fontSize: theme.scrollView.fontSize}}
                    tabBarUnderlineStyle={theme.scrollView.underlineStyle}>
                    {this.state.tabNames.map((item, i) => {
                        return(
                            <HomeTab navigator={this.props.navigator} tabLabel={item} key={i} tabTag={item}/>
                        );})
                    }
                </ScrollableTabView>
            </View>
        );
    }

    _pullDownCallback(){
        // this.props.navigator.push({
        //     component: TabItemSwitcherPage,
        //     args: {tabNames: this.state.tabNames}
        // });
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    text: {
        color: theme.text.color,
        fontSize: theme.text.fontSize
    }
});