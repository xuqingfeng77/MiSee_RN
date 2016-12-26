
import React, {Component} from 'react';
import {
  View,
  Text,
  WebView,
  AsyncStorage
  } from 'react-native';

var Map = React.createClass({
  getInitialState: function(){
    return{
      url: null
    };
  },
  render(){
    var webView = null;
    if(this.state.url){
      webView = <WebView source={{uri:this.state.url}} />
    }
      var tempText= <Text style={{color:'red',marginTop:70,width:200,height:100}}>哈哈哈</Text>;

    return(
      <View style={{flex:1}}>
          {webView}
      </View>
    );
  },
  componentDidMount: function(){
    var that = this;
    AsyncStorage.multiGet(['_' + that.props.type, 'pos'], function(err, result){
      if(!err){
        var pos = result[1][1];
        var markers = result[0][1];
        var url = 'http://vczero.github.io/webview/index.html?';
        if(_GEO_OPEN){
          url += 'pos=' + pos + '&markers=' + markers;
        }else{
          url += 'pos=' + _GEO_TEST_POS + '&markers=' + markers;
        }
        that.setState({
          url: "http://vczero.github.io/webview/index.html",
        });
      }else{
        alert('定位失败');
      }
    });
  }
});

module.exports = Map;