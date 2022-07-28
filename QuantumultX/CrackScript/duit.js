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

re('"vip_end_at":\\d@"vip_mechanism":\\d', '"vip_end_at":1871655312087@"vip_mechanism":0')
re('"vip_level":\\d@"latest_vip_level":\\d', '"vip_level":11@"latest_vip_level":11')
re('"vip_remain":\\d@"svip_mechanism":\\d', '"vip_remain":0@"svip_mechanism":1')
re('"vip_end_at_mills":\\d@"vip":\\w+', '"vip_end_at_mills":1871655312087@"vip":true')
