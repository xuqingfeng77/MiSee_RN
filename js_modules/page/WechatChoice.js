/**
 * Created by wangdi on 6/11/16.
 * 新闻头条
 */
'use strict';

import React, {Component,PropTypes} from 'react';
import {Text,StyleSheet,ListView,TouchableOpacity,Navigator} from 'react-native';
import theme from '../config/theme';
import computeTime from '../util/computeTime';
import ListItem from '../component/ListItem';
import NewsWebView from './NewsWebview';
export default class WechatChoice extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(this._parseData()),
        };
    }
    static propTypes = {
        title: PropTypes.string,
    };
    componentDidMount() {

        // this._parseData.bind(this);
    }
    _parseData(){
        var tempArr=[];
        if("error"===this.props.contents){
            alert('数据异常110');
            return;
        }
        if("请求成功"===JSON.parse(this.props.contents).reason){
            // var temp=resultJson.result;
            var tempResult=JSON.parse(this.props.contents).result;
            tempArr=tempResult.list;

        }else {
            alert('数据异常');
        }
        return tempArr;

    }
    _toWebView(data){

        this.props.navigator.push({
            component:NewsWebView,
            params: {
                url: data,
            }

        })
    }

    render() {
        return (
            <ListView
                style={styles.listView}
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={this._renderItem.bind(this)}
            />

        );
    }

    _renderItem(rowData, sectionID, rowID, highlightRow) {
            return (
                <TouchableOpacity activeOpacity={0.3} onPress={this._toWebView.bind(this,rowData.url)}>
                   <ListItem
                       title={rowData.title}
                       author_name={rowData.source}
                       date={rowData.mark}
                       img_url={rowData.firstImg}
                   />
                </TouchableOpacity>
            );
    }

}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    leftcontent:{
        flex:1,
        marginLeft:10,

    },
    listView:{

    },

});
