/**
 * Created by xqf on 6/11/16.
 * 老黄历
 */
'use strict';

import React, {Component,PropTypes} from 'react';
import {View,Text,Image,StyleSheet,ListView,TouchableOpacity,Navigator} from 'react-native';
import theme from '../config/theme';
import LaohlCalendar from './LaohlCalendar';
import PhoneUtil from '../util/PhoneUtil';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';
import NetURL from '../net/NetURL';
import NetUtil from '../net/NetUtil';
export default class LaoHL extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jsonData:"",
             dayInfo:this._parseData(),
            date:""
        };
    }
    static propTypes = {
        title: PropTypes.string,
    };

    componentDidMount(){
        RCTDeviceEventEmitter.addListener('valueChange', this._callQueryDate.bind(this));
    }

    componentWillUnmount(){
        RCTDeviceEventEmitter.removeListener('valueChange', this._callQueryDate.bind(this));
    }
    //解析前一个页面的数据
    _parseData(){
        var tempArr=null;
        // alert(JSON.parse(this.props.contents).reason);
        if("error"===this.props.contents){
            alert('数据异常110');
            return tempArr;
        }
        if(0===JSON.parse(this.props.contents).error_code){
            // var temp=resultJson.result;
            var tempResult=JSON.parse(this.props.contents).result;
            tempArr=tempResult;
        }else {
            alert(JSON.parse(this.props.contents).reason);
        }

        return tempArr;

    }
    //解析当前页面的http返回数据
    _parseData2(data){
        var tempArr=null;
        // alert(JSON.parse(this.props.contents).reason);
        if("error"===data){
            // alert('数据异常111');
            return tempArr;
        }
        if(0===JSON.parse(data).error_code){
            // var temp=resultJson.result;
            var tempResult=JSON.parse(data).result;
            tempArr=tempResult;
        }else {
            alert(JSON.parse(data).reason);
        }

        return tempArr;

    }
    _toLaohlCalendar(){

        this.props.navigator.push({
            component:LaohlCalendar,

        })
    }
    _callQueryDate(data){

        this._fetchData(data);
    }


    _parseNetData(data){
        if(NetUtil.ERROR===data){
            alert("网络异常");
        }else {

            var temp=this._parseData2(data);
            if(temp){
                this.setState({

                    dayInfo:temp,

                });
            }

        }
    }

    _fetchData(data) {
        var map={"date":data};
        NetUtil.get(NetURL.laohl_url,map,this._parseNetData.bind(this));

    }
    render() {
        return (
            <View style={styles.container}>

                {/*上*/}
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:'bagua'}} style={[styles.imageWH,styles.imageMargin]}></Image>
                    <TouchableOpacity activeOpacity={0.3}  onPress={this._toLaohlCalendar.bind(this)} style={{position:'absolute',left:PhoneUtil.devWidth-60,top:30,width:30,height:30}}>
                    <Image source={{uri:'calendar'}} style={{width:30,height:30}} ></Image>
                    </TouchableOpacity>
                </View>
                {/*下*/}
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1,alignItems:'center'}}>
                        {/*阴历*/}
                        <Text style={[styles.txtBlackColor,styles.fontBig,styles.txtMarginTop]}>农历</Text>
                        <Text style={[styles.txtColor,styles.fontMid,styles.txtMarginTop]}>{(this.state.dayInfo)?this.state.dayInfo.yinli:''}</Text>
                        {/*忌*/}
                        <Text style={[styles.txtBlackColor,styles.fontBig,styles.txtMarginTop]}>忌</Text>
                        <Text style={[styles.txtColor,styles.fontMid,styles.txtMarginTop]}>{(this.state.dayInfo)?this.state.dayInfo.ji:''}</Text>
                        {/*凶神*/}
                        <Text style={[styles.txtBlackColor,styles.fontBig,styles.txtMarginTop]}>凶神</Text>
                        <Text style={[styles.txtColor,styles.fontBig,styles.txtMarginTop]}>{(this.state.dayInfo)?this.state.dayInfo.xiongshen:''}</Text>
                        <Text style={[styles.txtColor,styles.fontMid,styles.txtMarginTop]}>{(this.state.dayInfo)?this.state.dayInfo.ji:''}</Text>
                        {/*五行*/}
                        <Text style={[styles.txtBlackColor,styles.fontBig,styles.txtMarginTop]}>五行</Text>
                        <Text style={[styles.txtColor,styles.fontBig,styles.txtMarginTop]}>{(this.state.dayInfo)?this.state.dayInfo.wuxing:''}</Text>

                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                        {/*阳历*/}
                        <Text style={[styles.txtBlackColor,styles.fontBig,styles.txtMarginTop]}>阳历</Text>
                        <Text style={[styles.txtColor,styles.fontMid,styles.txtMarginTop]}>{(this.state.dayInfo)?this.state.dayInfo.yangli:''}</Text>
                        {/*宜*/}
                        <Text style={[styles.txtBlackColor,styles.fontBig,styles.txtMarginTop]}>宜</Text>
                        <Text style={[styles.txtColor,styles.fontMid,styles.txtMarginTop]}>{(this.state.dayInfo)?this.state.dayInfo.yi:''}</Text>
                        {/*冲煞*/}
                        <Text style={[styles.txtBlackColor,styles.fontBig,styles.txtMarginTop]}>冲煞</Text>
                        <Text style={[styles.txtColor,styles.fontMid,styles.txtMarginTop]}>{(this.state.dayInfo)?this.state.dayInfo.chongsha:''}</Text>
                        {/*拜祭*/}
                        <Text style={[styles.txtBlackColor,styles.fontBig,styles.txtMarginTop]}>祭拜</Text>
                        <Text style={[styles.txtColor,styles.fontMid,styles.txtMarginTop]}>{(this.state.dayInfo)?this.state.dayInfo.baiji:''}</Text>
                    </View>
                </View>

            </View>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    leftcontent:{
        flex:1,
        marginLeft:10,

    },
    imageWH:{
        width:100,
        height:100,
    },
    imageMargin:{
        marginTop:10,
    },
    txtMarginTop:{
        marginTop:10,
    },
    txtColor:{
      color: theme.anheiColor

    },
    txtBlackColor:{
        color: 'black',
        fontWeight:'bold'
    },
    fontBig:{
       fontSize:17,
    },
    fontMid:{
        fontSize:15,
    }

});
