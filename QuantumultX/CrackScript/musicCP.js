/*
musicCP unlock vip
^https:\/\/app\.poputar\.com\/popumusic\/(goods|goodsColumn|search|channel)\/(judgeIsBuy|getAllGoodsColumn|multipleSearch|getChannelMusicDetail|goodsDetail) url script-response-body task/others/musicCP.js
*/

	var body = $response.body;
	var obj = JSON.parse(body);

	const path1 = "/goods/judgeIsBuy";
	const path2 = "/goodsColumn/getAllGoodsColumn";
	const path3 = "/search/multipleSearch";
	const path4 = "/channel/getChannelMusicDetail";
	const path5 = "/goods/goodsDetail";

	if ($request.url.indexOf(path1) != -1){
		obj={
			"retCode": 10000,
			"message": "操作成功",
			"token": null,
			"obj": {
				"hasBuy": true,
				"goodsData": null
			}
		}
	}

	if ($request.url.indexOf(path2) != -1){
		for(var num1 = 0; num1 < obj.obj.content.length; num1++ ){
			for(var num2 = 0; num2 < obj.obj.content[num1].goodsColumnInfoVoList.length; num2++ ){
				obj.obj.content[num1].goodsColumnInfoVoList[num2].originalPrice = "0.0";
				obj.obj.content[num1].goodsColumnInfoVoList[num2].realPrice = "0.0";
				obj.obj.content[num1].goodsColumnInfoVoList[num2].paymentType = "FREE";
				obj.obj.content[num1].goodsColumnInfoVoList[num2].buy = true;
			}
		}
	}

	if ($request.url.indexOf(path3) != -1){
		for(var num1 = 0; num1 < obj.obj.content.length; num1++ ){
			obj.obj.content[num1].paymentType = "free";
			obj.obj.content[num1].realPrices = 0.0;
			obj.obj.content[num1].originalPrice = "0.0";
			obj.obj.content[num1].buy = true;
		}
	}

	if ($request.url.indexOf(path4) != -1){
		for(var num1 = 0; num1 < obj.obj.mainSong.length; num1++ ){
			obj.obj.mainSong[num1].isLock = false;
		}
		obj.obj.preferentialPrice = 0.0;
		obj.obj.originalPrice = 0.0;
		obj.obj.isBuy = 1;
	}

	if ($request.url.indexOf(path5) != -1){
		obj.obj[obj.obj.length - 1].content[0].alreadyBuy = true;
	}

	// 重新打包回json字符串
	body = JSON.stringify(obj);
	// 结束修改
	$done(body);
