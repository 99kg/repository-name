/*
咔咔弹幕解锁

QX:
[rewrite_local]
^https:\/\/api\.bibishenqi\.com\/api
\/5e5f0de6355ba url script-response-body task/others/kaka.js

[mitm]
hostname = api.bibishenqi.com, 
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


re('"is_fee":\\d', '"is_fee":0')
