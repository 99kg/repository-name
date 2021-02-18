var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const path1 = '/mobile/user';
const path2 = '/mobile/courses';

if (url.indexOf(path1) != -1) {
	obj.data["member_type"] = 5;
	obj.data["expire_time"] = "2088-08-08";
	obj.data["coin"] = 99999.99;
	obj.data.pumpkin["pumpkin_point"] = 999999
}

if (url.indexOf(path2) != -1) {
	obj.data.user["member_type"] = 5;
	obj.data.user["expire_time"] = "2088-08-08";
	obj.data.course["isbuy"] = true;
	obj.data.course["is_free"] = 1;
	obj.data.course["price"] = 0;
	obj.data.course.course_item["is_free"] = 1;
	for(var num = 0; num < obj.data.course.course_sections.length; num++ ){
		obj.data.course.course_sections[num].is_free = 1;
	}
	for(var num = 0; num < obj.data.course.course_items.length; num++ ){
		obj.data.course.course_items[num].is_free = 1;
	}
}

body = JSON.stringify(obj);
$done(body);