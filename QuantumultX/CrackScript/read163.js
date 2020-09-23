/*
网易蜗牛读书会员解锁

QX:
[rewrite_local]
^https:\/\/p\.du\.163\.com\/gain\/readtime\/info.json url script-response-body task/others/read163.js

[mitm]
hostname = p.du.163.com,
*/

function re() {
    var body = $response.body;
    if (arguments[0].includes("@")) {
        var regs = arguments[0].split("@");
        var strs = arguments[1].split("@");
        for (i = 0; i < regs.length; i++) {
            var reg = new RegExp(regs[i], "g");
            body = body.replace(reg, strs[i]);
        }
    } else {
        var reg = new RegExp(arguments[0], "g");
        body = body.replace(reg, arguments[1]);
    }
    $done(body);
}

/*
	// 判断请求路径存在则调用函数re()调试该路径下的响应体
	if ($request.url.indexOf("/路径1") != -1) {
		  // 匹配里若需用到正则的反斜杠语句像\d+、\w+时请用双反斜杆\\d+、\\w+
		  // 例如：re('"isFree":\\w+@"expireTime":\\w+', '"isFree":true@"expireTime":4070965662')
		  re('匹配1@匹配2...', '替1@替2...') 
	}
	if ($request.url.indexOf("/路径2") != -1) {
	  // 例如：re('"level":\\d', '"level":2')
	  re('匹配1', '替1')
	}
*/

re('"tradeEndTime":\\d+', '"tradeEndTime":4070957802000')
