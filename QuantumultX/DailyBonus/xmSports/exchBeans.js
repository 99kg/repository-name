const $nobyda = nobyda();

if ($nobyda.isRequest) {
    GetCookie()
} else {
    Checkin()
}

function Checkin() {
    var date = new Date()
    const headers = {
        'Cookie' : $nobyda.read("CookieWX"),
        'content-type' : `application/x-www-form-urlencoded`,
        'Connection' : `keep-alive`,
        'Accept-Encoding' : `gzip,compress,br,deflate`,
        'Referer' : `https://servicewechat.com/wxa5bf5ee667d91626/121/page-frame.html`,
        'Host' : `api.m.jd.com`,
        'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x1800022c) NetType/4G Language/zh_CN`
    };

    const myRequest = {
        url: `https://api.m.jd.com/api?functionId=swat_game_exchangejingbean&fromType=wxapp&timestamp=${date.getTime()}`,
        headers: headers,
        body: `body=%7B%7D&appid=swat_miniprogram&client=tjj_m&screen=1920*1080&osVersion=5.0.0&networkType=wifi&sdkName=orderDetail&sdkVersion=1.0.0&clientVersion=3.1.3&area=11`
    };

    $nobyda.post(myRequest, function(error, response, data) {
        if (!error) {
            const json = JSON.parse(data)
            if (json.code == 0) {
                $nobyda.notify(`微信运动兑换京豆成功🎉\n${json.msg}`, "", "")
            } else {
                $nobyda.notify(`微信运动兑换京豆失败!\n${json.msg}`, "", "")
            }
        } else {
            $nobyda.notify("微信运动兑换京豆接口请求失败!", "", error)
        }
        $nobyda.end()
    });
}

function GetCookie() {
    var CK = $request.headers['Cookie']
    var RA = $nobyda.read("CookieWX")
    if (RA != CK) {
        $nobyda.write(CK, "CookieWX")
        $nobyda.notify(`微信运动兑换京豆Cookie写入成功 🎉`, "", "")
        $nobyda.notify(CK, "", "")
    } else {
        console.log("跳过写入Cookie")
    }
}

function nobyda() {
    const isRequest = typeof $request != "undefined"
    const isSurge = typeof $httpClient != "undefined"
    const isQuanX = typeof $task != "undefined"
    const notify = (title, subtitle, message) => {
        if (isQuanX) $notify(title, subtitle, message)
        if (isSurge) $notification.post(title, subtitle, message)
    }
    const write = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key)
        if (isSurge) return $persistentStore.write(value, key)
    }
    const read = (key) => {
        if (isQuanX) return $prefs.valueForKey(key)
        if (isSurge) return $persistentStore.read(key)
    }
    const post = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "POST"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.post(options, callback)
    }
    const end = () => {
        if (isQuanX) return $done({})
        if (isSurge) isRequest ? $done({}) : $done()
    }
    return { isRequest, isQuanX, isSurge, notify, write, read, post, end }
};