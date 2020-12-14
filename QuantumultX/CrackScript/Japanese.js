var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

if (obj.data[0].book_id == 10001) {
	obj = {
		"data": [{
			"book_title": "标准日本语初级",
			"activation_date": "2020-05-01",
			"activation_status": 0,
			"activation_code": "526728",
			"book_id": 10001
		}, {
			"book_title": "标准日本语中级",
			"activation_date": "2020-05-01",
			"activation_status": 0,
			"activation_code": "62899",
			"book_id": 10002
		}, {
			"book_title": "标准日本语高级",
			"activation_date": "2020-05-01",
			"activation_status": 0,
			"activation_code": "893000",
			"book_id": 10003
		}],
		"status": 0,
		"message": "获取图书列表成功"
	};
}
$done({body: JSON.stringify(obj)});
