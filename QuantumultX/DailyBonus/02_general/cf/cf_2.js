const cookieName2 = 'cf2'
const signurlKey2 = 'senku2_signurl_cf2'
const signheaderKey2 = 'senku2_signheader_cf2'
const signbodyKey2 = 'senku2_signbody_cf2'
const senku2 = init()
const signurlVal2 = senku2.getdata(signurlKey2)
const signheaderVal2 = senku2.getdata(signheaderKey2)
const signbodyVal2 = senku2.getdata(signbodyKey2)

const url = `https://mwegame.qq.com/yoyo/cf/firevalsignin`;
const method = `POST`;

const myRequest = {
    url: url,
    method: method,
    headers: signheaderVal2,
    body: signbodyVal2
};

console.log(signheaderVal2);
console.log("\n\n\n\n");
console.log(signbodyVal2);

$task.fetch(myRequest).then(response => {
    const obj = JSON.parse(response.body);
    console.log(response.statusCode + "\n\n" + obj.msg);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

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
