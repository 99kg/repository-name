const cookieName2 = 'cf2'
const signurlKey2 = 'senku2_signurl_cf2'
const signheaderKey2 = 'senku2_signheader_cf2'
const signbodyKey2 = 'senku2_signbody_cf2'
const senku2 = init()
const signurlVal2 = senku2.getdata(signurlKey2)
const signheaderVal2 = senku2.getdata(signheaderKey2)
let signbodyVal2;

try {
    const signbodyVal2 = senku2.getdata(signbodyKey2)
    if (signbodyVal2) {
        senku2.log(`${signbodyVal2}, 获取签到信息成功, 开始执行签到任务`)
    } else {
        senku2.setdata("cGameId=1001&gameId=10011&subGameId=10011&userId=449812009&areaId=84&serverId=322&roleId=2132208760&token=MMdsYqBM&uin=948279346&uniqueRoleId=2132208760&appOpenid=C122042288BE7A123419B75C637F70B9&cCurrentGameId=10011&cRand=1755829683697&tghappid=1000045&sig=KhQJmO/a+Mx/nCDsMRUJRd88Y3Q=", signbodyKey2);
        senku2.log(`${signbodyVal2}, 获取签到信息失败,手动body赋值, 开始执行签到任务`)
    }
} catch (e) {
    senku2.setdata("cGameId=1001&gameId=10011&subGameId=10011&userId=449812009&areaId=84&serverId=322&roleId=2132208760&token=MMdsYqBM&uin=948279346&uniqueRoleId=2132208760&appOpenid=C122042288BE7A123419B75C637F70B9&cCurrentGameId=10011&cRand=1755829683697&tghappid=1000045&sig=KhQJmO/a+Mx/nCDsMRUJRd88Y3Q=", signbodyKey2);
    senku2.log(`${cookieName2}, 错误信息: ${e}`)
    senku2.log(`${signbodyVal2}, 获取签到信息失败,手动body赋值, 开始执行签到任务`)
}

senku2.log(`最终 signbodyVal2 值: ${signbodyVal2}`);
sign()

function sign() {
    const url = { url: signurlVal2, headers: JSON.parse(signheaderVal2), body: signbodyVal2 }
    senku2.post(url, (error, response, data) => {
        senku2.log(`${cookieName2}, data: ${data}`)
        const res = JSON.parse(data)
        let subTitle = ``
        let detail = ``
        if (res.status == 1) {
            subTitle = `签到结果: 成功`
        } else {
            subTitle = `签到结果: 失败`
            detail = `状态: ${res.message}`
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
