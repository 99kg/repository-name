/*
克拉壁纸 unlock vip

QX：
^https:\/\/claritywallpaper\.com url script-response-body kela.js
claritywallpaper.com
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

re('"isFree":\\w+@"expireTime":\\w+', '"isFree":true@"expireTime":4070965662')
re('"level":\\d', '"level":2')
