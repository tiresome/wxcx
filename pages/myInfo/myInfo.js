//index.js
//获取应用实例
var app = getApp()

import t1 from "../../testData/t1";
import api from "../../common/api";

console.log(t1);

Page({
    data: {
        t1: t1.data,
        motto: 'Hello World',
        userInfo: {}
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
        console.log('onLoad')



    },
    toMore(event){
        console.log(event);

    }
})
