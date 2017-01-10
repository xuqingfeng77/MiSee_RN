/**
 * Created by xqf on 6/11/16.
 * 透明的遮罩层
 */
'use strict';

import React, {Component} from 'react';
import {View,
    Text,
    Image,
    Modal,
    Navigator,
    TextInput,
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableHighlight,  } from 'react-native';
import NavigationBar from '../component/SimpleNavigationBar';
import testNewView from '../test/testNewView';
import px2dp from '../util/px2dp';
import PageComponent from '../page/HomeTab'
import HomeTab from '../page/HomeTab'
var { width, height, scale } = Dimensions.get('window');
export default class testInput extends PageComponent {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            show:false,
        };
    }



    // 自定义方法区域
    // your method
    _leftButtonClick() {

    }
    _rightButtonClick() {
        //
        // this._setModalVisible();

        this.props.navigator.push({
            component:HomeTab,

        })
    }

    // 显示/隐藏 modal
    _setModalVisible() {
        let isShow = this.state.show;
        this.setState({
            show:!isShow,
        });
    }

    // 绘制View
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="注册" backOnPress={this._handleBack.bind(this)}/>
                <Text style={{color:'red'}} onPress={this._rightButtonClick.bind(this)}>测试</Text>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.show}
                    onShow={() => {}}
                    onRequestClose={() => {}} >
                    <View style={styles.modalStyle}>
                        <View style={styles.subView}>
                            <Text style={styles.titleText}>
                                提示
                            </Text>
                            <Text style={styles.contentText}>
                                Modal显示的View 多行了超出一行了会怎么显示，就像这样显示了很多内容该怎么显示，看看效果
                            </Text>
                            <View style={styles.horizontalLine} />
                            <View style={styles.buttonView}>
                                <TouchableHighlight underlayColor='transparent'
                                                    style={styles.buttonStyle}
                                                    onPress={this._setModalVisible.bind(this)}>
                                    <Text style={styles.buttonText}>
                                        取消
                                    </Text>
                                </TouchableHighlight>
                                <View style={styles.verticalLine} />
                                <TouchableHighlight underlayColor='transparent'
                                                    style={styles.buttonStyle}
                                                    onPress={this._setModalVisible.bind(this)}>
                                    <Text style={styles.buttonText}>
                                        确定
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }

}
// Modal属性
// 1.animationType bool  控制是否带有动画效果
// 2.onRequestClose  Platform.OS==='android'? PropTypes.func.isRequired : PropTypes.func
// 3.onShow function方法
// 4.transparent bool  控制是否带有透明效果
// 5.visible  bool 控制是否显示

// css样式
var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ECECF0',
    },
    // modal的样式
    modalStyle: {
        // backgroundColor:'#ccc',
        alignItems: 'center',
        justifyContent:'center',
        flex:1,
    },
    // modal上子View的样式
    subView:{
        marginLeft:60,
        marginRight:60,
        backgroundColor:'#fff',
        alignSelf: 'stretch',
        justifyContent:'center',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor:'#ccc',
    },
    // 标题
    titleText:{
        marginTop:10,
        marginBottom:5,
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
    },
    // 内容
    contentText:{
        margin:8,
        fontSize:14,
        textAlign:'center',
    },
    // 水平的分割线
    horizontalLine:{
        marginTop:5,
        height:0.5,
        backgroundColor:'#ccc',
    },
    // 按钮
    buttonView:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonStyle:{
        flex:1,
        height:44,
        alignItems: 'center',
        justifyContent:'center',
    },
    // 竖直的分割线
    verticalLine:{
        width:0.5,
        height:44,
        backgroundColor:'#ccc',
    },
    buttonText:{
        fontSize:16,
        color:'#3393F2',
        textAlign:'center',
    },
});

