/***********************************
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️
/*
[mitm]
hostname = *.duitang.com
[rewrite_local]
^https:\/\/www\.duitang\.com\/napi\/people\/me\/ url script-response-body https://raw.githubusercontent.com/Geekey101/-X-Public/main/-X-Public-Scripts/duitang.js
*/

***********************************/

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

re('"vip":\\w+@"vip_level":\\d', '"vip":true@"vip_level":11')
