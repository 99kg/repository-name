const cookieName2 = 'cf2'
const signurlKey2 = 'senku2_signurl_cf2'
const signheaderKey2 = 'senku2_signheader_cf2'
const signbodyKey2 = 'senku2_signbody_cf2'
const senku2 = init()

const requrl = $request.url
if ($request && $request.method != 'OPTIONS') {
  const signurlVal = requrl
  const signheaderVal = JSON.stringify($request.headers)
  if (signurlVal) senku2.setdata(signurlVal, signurlKey2)
  if (signheaderVal) senku2.setdata(signheaderVal, signheaderKey2)

  const signbodyVal = $request.body
  console.log('Body type:', typeof signbodyVal)
  console.log('Body value:', signbodyVal) // 确认是否获取到body
  if (signbodyVal !== undefined && signbodyVal !== null) {
    // 确保 body 被正确存储为字符串
    senku2.setdata(signbodyVal.toString(), signbodyKey2)
    senku2.msg(cookieName2, `获取body: 成功`, signbodyVal.toString())
  } else {
    senku2.msg(cookieName2, `获取body: 失败`, 'body为空或未定义')
  }
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
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
senku2.done()
