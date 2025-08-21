const cookieName2 = 'cf2'
const signurlKey2 = 'senku2_signurl_cf2'
const signheaderKey2 = 'senku2_signheader_cf2'
const signbodyKey2 = 'senku2_signbody_cf2'
const senku2 = init()
const signurlVal2 = senku2.getdata(signurlKey2)
const signheaderVal2 = senku2.getdata(signheaderKey2)

sign()

function sign() {
    const url = { url: signurlVal2, headers: JSON.parse(signheaderVal2) }

    senku2.get(url, (error, response, data) => {
        const result = JSON.parse(data)
        let subTitle = ``
        let detail = ``
        if (result.msg == "签到成功") {
            subTitle = `签到结果: 签到成功！`
            detail = result.data.exp
        } else if (result.msg == "已签到") {
            subTitle = `签到结果: 您已签到！`
            detail = result.data.exp
        } else {
            subTitle = `签到结果: 签到失败！`
            detail = result.msg
        }
        senku2.msg(cookieName2, subTitle, detail)
        senku2.done()
    })
}

function init() {
    isSurge = () => {
        return undefined === this.$httpClient ? false : true
    }
    isQuanX = () => {
        return undefined === this.$task ? false : true
    }
    getdata = (key) => {
        if (isSurge()) return $persistentStore.read(key)
        if (isQuanX()) return $prefs.valueForKey(key)
    }
    setdata = (key, val) => {
        if (isSurge()) return $persistentStore.write(key, val)
        if (isQuanX()) return $prefs.setValueForKey(key, val)
    }
    msg = (title, subtitle, body) => {
        if (isSurge()) $notification.post(title, subtitle, body)
        if (isQuanX()) $notify(title, subtitle, body)
    }
    log = (message) => console.log(message)
    get = (url, cb) => {
        if (isSurge()) {
            $httpClient.get(url, cb)
        }
        if (isQuanX()) {
            url.method = 'GET'
            $task.fetch(url).then((resp) => cb(null, resp, resp.body))
        }
    }
    post = (url, cb) => {
        if (isSurge()) {
            $httpClient.post(url, cb)
        }
        if (isQuanX()) {
            url.method = 'POST'
            $task.fetch(url).then((resp) => cb(null, resp, resp.body))
        }
    }
    done = (value = {}) => {
        $done(value)
    }
    return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
