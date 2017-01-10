/**
 * Created by xqf on 6/11/16.
 * 笑话大全
 */
'use strict';

import React, {Component,PropTypes} from 'react';
import {View,Text,StyleSheet,ListView,TouchableOpacity,Navigator} from 'react-native';
import theme from '../config/theme';
import computeTime from '../util/computeTime';
import ListItem from '../component/ListItem';
import NewsWebView from './NewsWebview';
export default class Xiaohua2 extends Component {
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

    }
    _parseData(){
        var tempArr=[];
        // alert(JSON.parse(this.props.contents).reason);
        if("error"===this.props.contents){
            alert('数据异常110');
            return;
        }
        if(0===JSON.parse(this.props.contents).error_code){
            // var temp=resultJson.result;
            var tempResult=JSON.parse(this.props.contents).result;
            tempArr=tempResult.data;
        }else {
            alert(JSON.parse(this.props.contents).reason);
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
            <View style={styles.container}>

                <Text style={{color:theme.anheiColor,fontSize:20}}></Text>
                <Text style={{color:theme.anheiColor,fontSize:17,padding:5,marginLeft:5}}>{rowData.content}</Text>
                <View style={{alignItems:'flex-end'}}>
                    <Text style={{color:'gray',fontSize:15}}>{rowData.updatetime}</Text>
                </View>

            </View>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
    },
    leftcontent:{
        flex:1,
        marginLeft:10,

    },
    listView:{

    },

});
