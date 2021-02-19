/*
 *
 * 微信运动兑换京豆
*/

var date = new Date()
const url = `https://api.m.jd.com/api?functionId=swat_game_exchangejingbean&fromType=wxapp&timestamp=${date.getTime()}`;
const method = `POST`;
const headers = {
'Cookie' : `sid=16234060567a89c71cd25fba6b5cda36;USER_FLAG_CHECK=d4ac9c9d910cfada6d3c46a7e4faaa06;pt_key=AAJgLooIADDmkAYcXOtODkCf2n1pZ8AXgVv_rnCYxMMVFxyFW74pKVa18jMufRQ0k3-tKLwKYm0;appkey=797c7d5f8f0f499b936aad5edcffa08c;appid=wxa5bf5ee667d91626;pt_pin=jd_6dcfb9dcf6c05;wxclient=gxhwx;ie_ai=1;`,
'content-type' : `application/x-www-form-urlencoded`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip,compress,br,deflate`,
'Referer' : `https://servicewechat.com/wxa5bf5ee667d91626/121/page-frame.html`,
'Host' : `api.m.jd.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x1800022c) NetType/4G Language/zh_CN`
};
const body = `body=%7B%7D&appid=swat_miniprogram&client=tjj_m&screen=1920*1080&osVersion=5.0.0&networkType=wifi&sdkName=orderDetail&sdkVersion=1.0.0&clientVersion=3.1.3&area=11`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log('微信运动兑换京豆：' + response.body.msg);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

// response.body:
// {"code":"0","data":10,"msg":"恭喜您，兑换成功+10京豆"}