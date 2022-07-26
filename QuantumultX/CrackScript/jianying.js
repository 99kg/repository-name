const path1 = "/commerce/v1/subscription/space_list";
const path2 = "/commerce/v1/subscription/user_info";
const path3 = "/commerce/v1/purchase/coupon_list";
const path4 = "/commerce/v1/ever_photo/space_info";
const path5 = "/commerce/v1/effect/check_effects";

let body = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	body.response = "{\"space_list\":[{\"product_id\":\"com.lemon.lvt_china_subscription_months_vip\",\"status\":3,\"space_capacity\":107374182400,\"space_time\":2678400,\"space_end\":1661387971,\"is_permanent\":false,\"desc\":\"剪映会员\",\"order_type\":\"\"}],\"is_first_subscribe\":true,\"is_auto_subscribe\":false}"
	body.data = {
    "space_list": [{
      "product_id": "com.lemon.lvt_china_subscription_months_vip",
      "status": 3,
      "space_capacity": 107374182400,
      "space_time": 2678400,
      "space_end": 1661387971,
      "is_permanent": false,
      "desc": "剪映会员",
      "order_type": ""
    }],
    "is_first_subscribe": true,
    "is_auto_subscribe": false
  };
}

if ($request.url.indexOf(path2) != -1){
	body.response = "{\"flag\":true,\"start_time\":1658709549,\"end_time\":1661387957,\"is_first_subscribe\":false,\"is_cancel_subscribe\":false,\"uid\":\"1231091097153672\",\"subscribe_uid\":\"1231091097153672\",\"subscribe_type\":\"auto\",\"authkey\":\"95f5f8f15fc83fa4f63eb50a249c369e\",\"product_id\":\"com.lemon.lvt_china_subscription_months_vip\",\"subscribe_cycle\":1,\"cycle_unit\":\"MONTH\",\"space_cap\":107374182400}"
	body.data = {
    "flag": true,
    "start_time": 1658709549,
    "end_time": 1661387957,
    "is_first_subscribe": false,
    "is_cancel_subscribe": false,
    "uid": "1231091097153672",
    "subscribe_uid": "1231091097153672",
    "subscribe_type": "auto",
    "authkey": "95f5f8f15fc83fa4f63eb50a249c369e",
    "product_id": "com.lemon.lvt_china_subscription_months_vip",
    "subscribe_cycle": 1,
    "cycle_unit": "MONTH",
    "space_cap": 107374182400
  };
}

if ($request.url.indexOf(path3) != -1){
	body.response = "{\"is_vip\":true,\"start_time\":1658709549,\"end_time\":1661387957,\"subscribe_type\":\"un-auto\",\"subscribe_cycle\":1,\"cycle_unit\":\"MONTH\",\"coupon_list\":[{\"coupon_type\":\"template\",\"coupon_status\":\"used\",\"currency\":\"CNY\",\"amount\":600,\"start_time\":1658709571,\"end_time\":1661387971,\"id_list\":[12847975]},{\"coupon_type\":\"template\",\"coupon_status\":\"used\",\"currency\":\"CNY\",\"amount\":300,\"start_time\":1658709571,\"end_time\":1661387971,\"id_list\":[12847976,12847977]},{\"coupon_type\":\"template\",\"coupon_status\":\"used\",\"currency\":\"CNY\",\"amount\":100,\"start_time\":1658709571,\"end_time\":1661387971,\"id_list\":[12847978,12847979]},{\"coupon_type\":\"template\",\"coupon_status\":\"normal\",\"currency\":\"CNY\",\"amount\":100,\"start_time\":1658709571,\"end_time\":1661387971,\"id_list\":[12847980]}]}"
	body.data = {
    "is_vip": true,
    "start_time": 1658709549,
    "end_time": 1661387957,
    "subscribe_type": "un-auto",
    "subscribe_cycle": 1,
    "cycle_unit": "MONTH",
    "coupon_list": [{
      "coupon_type": "template",
      "coupon_status": "used",
      "currency": "CNY",
      "amount": 600,
      "start_time": 1658709571,
      "end_time": 1661387971,
      "id_list": [12847975]
    }, {
      "coupon_type": "template",
      "coupon_status": "used",
      "currency": "CNY",
      "amount": 300,
      "start_time": 1658709571,
      "end_time": 1661387971,
      "id_list": [12847976, 12847977]
    }, {
      "coupon_type": "template",
      "coupon_status": "used",
      "currency": "CNY",
      "amount": 100,
      "start_time": 1658709571,
      "end_time": 1661387971,
      "id_list": [12847978, 12847979]
    }, {
      "coupon_type": "template",
      "coupon_status": "normal",
      "currency": "CNY",
      "amount": 100,
      "start_time": 1658709571,
      "end_time": 1661387971,
      "id_list": [12847980]
    }]
  };
}

if ($request.url.indexOf(path4) != -1){
	body.response = "{\"user_id\":\"1231091097153672\",\"quota\":107374182400,\"usage\":0,\"end_time\":0,\"space_list\":[{\"product_id\":\"com.lemon.lvt_china_subscription_months_vip\",\"status\":3,\"space_capacity\":107374182400,\"space_time\":2678400,\"space_end\":1661387971,\"is_permanent\":false,\"desc\":\"剪映会员\",\"order_type\":\"\"}]}"
	body.data = {
    "user_id": "1231091097153672",
    "quota": 107374182400,
    "usage": 0,
    "end_time": 0,
    "space_list": [{
      "product_id": "com.lemon.lvt_china_subscription_months_vip",
      "status": 3,
      "space_capacity": 107374182400,
      "space_time": 2678400,
      "space_end": 1661387971,
      "is_permanent": false,
      "desc": "剪映会员",
      "order_type": ""
    }]
  };
}

if ($request.url.indexOf(path5) != -1){
	body.response = "{\"vip_flag\":true}"
	body.data.vip_flag = true;
}

$done({body: JSON.stringify(body)});
