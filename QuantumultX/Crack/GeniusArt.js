/*
GeniusArt unlock vip

QX:
[rewrite_local]

^https:\/\/genius\-api\.dingdong\.tv\/api\/v1\/genius\/* url script-response-body task/others/GeniusArt.js

[mitm]
hostname = genius-api.dingdong.tv, 
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

re('"pay":\\w+@"error":\\d', '"pay":false@"error":0')
re('"warn":\\{[^}]+\}', '"warn":\{}')
