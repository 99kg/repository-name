var obj = JSON.parse($response.body);
obj= {
	"code": 0,
	"message": "查询成功",
	"data": {
		"endTime": 4102415999000,
		"productId": "earthquake_early_warning_10",
		"productName": "",
		"upgradePrice": 0,
		"vipType":"svip"
	}
};
$done({body: JSON.stringify(obj)});
