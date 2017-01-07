import React, {Component} from 'react';
var MenuList = require('../component/tab');
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
var data = {
  "数据分类": {
    "生活/天气/健康": ["身份证查询","手机号归属地","笑话大全","微信精选","新闻头条","天气空气质量预报"],
    "车辆/出行": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "金融基金": [
      "Node.js",
      "PHP",
      "Python",
      "Ruby"
    ],
      "娱乐/体育/问答": [
          "电影票房查询",
          "星座运势",
          "老黄历",
          "新华字典",
          "成语词典",
          "作文大全"
      ]
  },
  "明细   ":{
    "All": ["All"],
    "Apple": ["Xcode"],
    "Other": ["Sublime Text", "WebStrom",]
  },
    "goods":{
        "All": ["All"],
        "Apple": ["Xcode"],
        "Other": ["Sublime Text", "WebStrom",]
    },
    "Tool2":{
        "All": ["All"],
        "Apple": ["Xcode"],
        "Other": ["Sublime Text", "WebStrom",]
    }
};


var App2 = React.createClass({
  render: function(){
    return (
      <View style={{marginTop:25}}>
        <MenuList data={data} nSelected={1} tabSelected={0} click={this.onPress}/>
      </View>
    );
  },
  onPress(val){
    alert(val);
  }
});


module.exports=App2;