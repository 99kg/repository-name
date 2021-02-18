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

re('"member_type":\\d', '"member_type":5')
re('"expire_time":\\w+', '"expire_time":2030-05-05')
re('"user":\\{[^\\}]+\\}', '"user":{\"islogin\":true,\"isview\":true,\"isNewsStand\":2,\"member_type\":5,\"expire_time\":\"2030-05-05\",\"isdigg\":true,\"isfav\":true}')
re('"is_free":\\d', '"is_free":1')
re('"isbuy":\\w+', '"isbuy":true')