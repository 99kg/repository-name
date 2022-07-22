let body = JSON.parse($response.body);


body.response = "{\"flag\":true,\"start_time\":1584674770,\"end_time\":4077660370,\"is_first_subscribe\":true,\"is_cancel_subscribe\":false,\"uid\":\"2005146104519054\",\"subscribe_uid\":\"2005146104519054\",\"subscribe_type\":\"auto\",\"authkey\":\"41137e7b949cc0534ac0d1dffc4814b0\",\"product_id\":\"\",\"subscribe_cycle\":0,\"cycle_unit\":\"\",\"space_cap\":0}"


body.data.start_time = 1584674770;
body.data.end_time = 4077660370;
body.data.is_cancel_subscribe = false;
body.data.subscribe_type = "auto";
body.data.flag = true;

$done({body: JSON.stringify(body)});
