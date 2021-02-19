var $nobyda = nobyda();

(async () => {
    cookie = $nobyda.read("CookieWX")
    if ($nobyda.isRequest) {
        GetCookie()
    } else if (cookie) {
        await Checkin();
    } else {
        $nobyda.notify("", "", "签到终止, 未获取Cookie");
    }
})().finally(() => {
    $nobyda.done();
})

function Checkin() {
    var date = new Date()
    const url = `https://api.m.jd.com/api?functionId=swat_game_exchangejingbean&fromType=wxapp&timestamp=${date.getTime()}`;
    const method = `POST`;
    const headers = {
        'Cookie' : $nobyda.read("CookieWX"),
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

    $nobyda.post(myRequest, function(error, response, data) {
        if (!error) {
            if (data.code == 0) {
                $nobyda.notify("微信运动兑换京豆成功！🎉", "", "")
            } else {
                $nobyda.notify("微信运动兑换京豆失败！🎉", "", "")
            }
        } else {
            $nobyda.notify("签到接口请求失败", "", error)
        }
        $nobyda.end()
    });
}

function GetCookie() {
    var CKA = $request.url.match(/sid=.+;/)
    var CKB = JSON.stringify($request.headers).match(/sid=.+;/)
    var EXBEAN = CKA || CKB || null
    var RA = $nobyda.read("CookieWX")
    if (EXBEAN) {
        if (RA != EXBEAN[2]) {
            $nobyda.write(EXBEAN[2], "CookieWX")
            $nobyda.notify(`微信运动兑换京豆Cookie写入成功 🎉`, "", "")
        }
    } else {
        console.log("\n请求不含Cookie, 跳过写入 ‼️")
    }
}

function nobyda() {
    const times = 0
    const start = Date.now()
    const isRequest = typeof $request != "undefined"
    const isSurge = typeof $httpClient != "undefined"
    const isQuanX = typeof $task != "undefined"
    const isLoon = typeof $loon != "undefined"
    const isJSBox = typeof $app != "undefined" && typeof $http != "undefined"
    const isNode = typeof require == "function" && !isJSBox;
    const node = (() => {
        if (isNode) {
            const request = require('request');
            return ({
                request
            })
        } else {
            return (null)
        }
    })()
    const notify = (title, subtitle, message) => {
        if (isQuanX) $notify(title, subtitle, message)
        if (isSurge) $notification.post(title, subtitle, message)
        if (isNode) log('\n' + title + '\n' + subtitle + '\n' + message)
        if (isJSBox) $push.schedule({
            title: title,
            body: subtitle ? subtitle + "\n" + message : message
        })
    }
    const write = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key)
        if (isSurge) return $persistentStore.write(value, key)
    }
    const read = (key) => {
        if (isQuanX) return $prefs.valueForKey(key)
        if (isSurge) return $persistentStore.read(key)
    }
    const adapterStatus = (response) => {
        if (response) {
            if (response.status) {
                response["statusCode"] = response.status
            } else if (response.statusCode) {
                response["status"] = response.statusCode
            }
        }
        return response
    }
    const get = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = {
                url: options
            }
            options["method"] = "GET"
            $task.fetch(options).then(response => {
                callback(null, adapterStatus(response), response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.get(options, (error, response, body) => {
            callback(error, adapterStatus(response), body)
        })
        if (isNode) {
            node.request(options, (error, response, body) => {
                callback(error, adapterStatus(response), body)
            })
        }
        if (isJSBox) {
            if (typeof options == "string") options = {
                url: options
            }
            options["header"] = options["headers"]
            options["handler"] = function(resp) {
                let error = resp.error;
                if (error) error = JSON.stringify(resp.error)
                let body = resp.data;
                if (typeof body == "object") body = JSON.stringify(resp.data);
                callback(error, adapterStatus(resp.response), body)
            };
            $http.get(options);
        }
    }

    const log = (message) => console.log(message)
    const time = () => {
        const end = ((Date.now() - start) / 1000).toFixed(2)
        return console.log('\n签到用时: ' + end + ' 秒')
    }
    const done = (value = {}) => {
        if (isQuanX) return $done(value)
        if (isSurge) isRequest ? $done(value) : $done()
    }
    return {
        isRequest,
        isNode,
        notify,
        write,
        read,
        get,
        log,
        time,
        times,
        done
    }
};