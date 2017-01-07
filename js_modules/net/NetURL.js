/**
 * Created by xuqingfeng on 2016/12/21.
 * 项目URL放置的地方
 * 使用方法，先import,再去xxx.login_url
 */
const toutiaoKey="eb0de04775958fb7ccb8934a9a0cda25";
const wechatkey="1cd305770a67bd29c42700b159091616";
const xiaohuakey="6d334a3c92a73e70d8aca90afbb60356";
const laohlkey="7d2ef1d4d3cff8e4e593e63d8b12edf4";
const chengycdkey="598e9fa852e4157f2bd8243d6231297b";
module.exports={

    //login
    login_url:'https://api.douban.com/v2/book/login',
    //
    winning_record_url:'https://gold.xitu.io/api/v1/timeline/57fa525a0e3dd90057c1e04d/2016-12-22',
    //新闻头条
    toutiao_url:'http://v.juhe.cn/toutiao/index?key='+toutiaoKey,
    //微信精选
    wechat_url:'http://v.juhe.cn/weixin/query?dtype=json&key='+wechatkey,
    //笑话大全
    xiaohua_url:'http://japi.juhe.cn/joke/content/list.from?sort=&key='+xiaohuakey,
    //老黄历
    laohl_url:'http://v.juhe.cn/laohuangli/d?key='+laohlkey,
    //成语词典
    chengycd_url:'http://v.juhe.cn/chengyu/query?key='+chengycdkey,

};