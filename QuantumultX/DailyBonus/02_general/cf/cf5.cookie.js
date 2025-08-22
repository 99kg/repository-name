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

  const signbodyVal = $request.body;
  console.log('Body type:', typeof signbodyVal);
  senku2.msg(typeof signbodyVal, 'typeof signbodyVal', '');
  console.log('Raw Body:', signbodyVal);

  if (!signbodyVal) {
    console.log('Request body is undefined or empty');
    senku2.msg(cookieName2, '请求体为空', '无法捕获请求体');
    senku2.done();
    return;
  }

  let bodyString = '';
  if (typeof signbodyVal === 'string') {
    bodyString = signbodyVal;
  } else if (signbodyVal instanceof ArrayBuffer) {
    bodyString = String.fromCharCode.apply(null, new Uint8Array(signbodyVal));
  } else {
    console.log('Body type is not supported:', typeof signbodyVal);
    senku2.msg(cookieName2, `Body类型错误`, `类型: ${typeof signbodyVal}`);
    senku2.done();
    return;
  }

  senku2.setdata(bodyString, signbodyKey2);
  senku2.msg(cookieName2, `Body存储成功`, `长度: ${bodyString.length}`);
}

// 存储处理后的字符串
senku2.setdata(bodyString, signbodyKey2);
senku2.msg(cookieName2, `Body存储成功`, `长度: ${bodyString.length}`);

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
