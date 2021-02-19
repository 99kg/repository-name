/*
 *
 * 微信运动兑换京豆
*/

var date = new Date()
const url = `https://api.m.jd.com/api?functionId=swat_game_exchangejingbean&fromType=wxapp&timestamp=${date.getTime()}`;
const method = `POST`;
const headers = {
'Cookie' : ``,
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