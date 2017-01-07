/**
 * Created by xqf on 6/11/16.
 * 笑话大全
 */
'use strict';

import React, {Component,PropTypes} from 'react';
import {Text,StyleSheet,ListView,TouchableOpacity,Navigator} from 'react-native';
export default class Xiaohua extends Component {
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
        alert(JSON.parse(this.props.contents).reason);
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

        // this.props.navigator.push({
        //     component:NewsWebView,
        //     params: {
        //         url: data,
        //     }
        //
        // })
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

                    <Text style={{color:'black',fontSize:20}}></Text>
                    <Text style={{color:'black',fontSize:17}}>{rowData.content}</Text>
                    <View style={{alignItems:'flex-end'}}>
                        <Text style={{color:'black',fontSize:15}}>{rowData.updatetime}</Text>
                    </View>

                </View>
            );
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    leftcontent:{
        flex:1,
        marginLeft:10,

    },
    listView:{

    },

});
