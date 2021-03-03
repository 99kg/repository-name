/*
用药助手 unlock vip

QX：
^https:\/\/newdrugs\.dxy\.cn\/app\/user\/(init|pro\/stat) url script-response-body MedicationAssistant.js
^https:\/\/i\.dxy\.cn\/snsapi\/username\/* url script-response-body MedicationAssistant.js

*.dxy.cn

*/

re('"expertUser":\\w+@"expert":\\w+', '"expertUser":true@"expert":true')
re('"professional":\\w+@"expertStatus":\\d', '"professional":true@"expertStatus":1')
re('"taskEndTime":\\w+@"isProActive":\\w+', '"taskEndTime":1999999999@"isProActive":true')
re('"expireDate":\\w+@"memberDiscount":\\w+', '"expireDate":1999999999@"memberDiscount":true')
re('"purchase":\\w+@"message":\\w+IAP', '"purchase":true@"message":null')
re('"error":\\w+@"memberDiscount":\\w+', '"expertUser":null@"memberDiscount":true')
re('"isActive":\\w+', '"isActive":true')

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