/**
 * Created by xuqingfeng on 2016/12/21.
 * 手机信息
 *
 */
import {Dimensions} from 'react-native';

// device width/height
const deviceWidthDp = Dimensions.get('window').width;
const deviceHeightDp = Dimensions.get('window').height;
module.exports={

   devWidth:deviceWidthDp,
   devHeight:deviceHeightDp

};