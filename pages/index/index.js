//index.js
//获取应用实例
var app = getApp()

import t1 from "../../testData/t1";
import api from "../../common/api";
import WxTouchEvent from "../../common/wx-touch-event";

let infoListTouchEvent = new WxTouchEvent();
Page({
    data: {
        t1: t1.data,
        showIndex: 0,
        logText: ""
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {

        this.infoListTouchEvent = infoListTouchEvent;

        this.infoListTouchEvent.bind({
            swipe: (e) => {
                this.swipeInfo(e.direction);
            }
        });

        console.log('onLoad')
        // api.getList().then(response => {
        //     console.log(response);
        // }, (err) => {
        //     console.log(err);
        // })

    },
    swipeInfo(direction){
        console.log(direction);

    },

    toMore(event){
        wx.navigateTo({
            url: '../myInfo/myInfo'
        });

        console.log(event);
    },
    upper(event){
        console.log(event);
    },
    lower(event){
        console.log(event);
    },
    touchStart: infoListTouchEvent.start.bind(infoListTouchEvent),
    touchMove: infoListTouchEvent.move.bind(infoListTouchEvent),
    touchEnd: infoListTouchEvent.end.bind(infoListTouchEvent),
    touchCancel: infoListTouchEvent.cancel.bind(infoListTouchEvent),

})
