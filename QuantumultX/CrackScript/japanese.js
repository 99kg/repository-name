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

re('"data": [^]+\\]', '"data":[{"book_title":"标准日本语初级","activation_date":"2020-05-01","activation_status":0,"activation_code":"526728","book_id":10001},{"book_title":"标准日本语中级","activation_date":"2020-05-01","activation_status":0,"activation_code":"62899","book_id":10002},{"book_title":"标准日本语高级","activation_date":"2020-05-01","activation_status":0,"activation_code":"893000","book_id":10003}]')
