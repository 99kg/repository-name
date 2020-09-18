/*
musicCP unlock vip
^https:\/\/app\.poputar\.com\/popumusic\/(payment|courseType|user)\/(payList|detail|chapterClass) url script-response-body task/others/musicCP_pay.js
*/

	var body = $response.body;
	var obj = JSON.parse(body);

	const path1 = "/courseType/detail";
	const path2 = "/payment/payList";
	const path3 = "/user/chapterClass";

	if ($request.url.indexOf(path1) != -1){
		obj.obj[obj.obj.length - 1].content[0].alreadyBuy = true;
	}

	if ($request.url.indexOf(path2) != -1){
		for(var num1 = 0; num1 < obj.obj.length; num1++ ){
			obj.obj[num1].alreadyBuy = "true";
		}
	}

	if ($request.url.indexOf(path3) != -1){
		obj.obj.alreadyBuy = true;
	}

	// 重新打包回json字符串
	body = JSON.stringify(obj);
	// 结束修改
	$done(body);
