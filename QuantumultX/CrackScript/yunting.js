/*
yunting unlock vip

QX:
[rewrite_local]

^https:\/\/39\.106\.98\.80\/* url script-response-body https://raw.githubusercontent.com/99kg/repository-name/master/QuantumultX/CrackScript/yunting.js

[mitm]
hostname = 39.106.98.80, 
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

re('"isSongPurchased":\\d', '"isSongPurchased":0')
re('"isVip":\\d', '"isVip":0')
re('"isPurchased":\\d', '"isPurchased":0')
re('"isExpired":\\d', '"isExpired":0')
