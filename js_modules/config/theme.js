/**
 * Created by wangdi on 5/11/16.
 */
'use strict';

import {PixelRatio, Dimensions, Platform} from 'react-native';
import px2dp from '../util/px2dp';

const globalTextColor = '#000';

module.exports = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    themeColor: 'rgb(22,131,251)',
    themeRedColor: 'rgb(255, 3, 3)',
    pageBackgroundColor: '#f4f4f4',
    anheiColor:'#2f2f2f',
    grayColor: '#c4c4c4',
    btnActiveOpacity: 0.7,
    actionBar: {
        height: (Platform.OS === 'android') ? px2dp(49) : px2dp(49),
        backgroundColor: 'rgb(22,131,251)',
        fontSize: px2dp(16),
        fontColor: 'white'
    },
    text: {
        color: globalTextColor,
        fontSize: px2dp(15)
    },
    scrollView: {
        fontSize: px2dp(15),
        underlineStyle: {
            backgroundColor: 'white'
        }
    }
};