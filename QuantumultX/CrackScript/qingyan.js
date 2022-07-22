/***********************************
[rewrite_local]
# 轻颜相机
https://commerce-api.faceu.mobi/commerce/v1/subscription/user_info url script-response-body https://raw.githubusercontent.com/99kg/repository-name/master/QuantumultX/CrackScript/qyxj.js

[mitm] 
hostname=commerce-api.faceu.mobi
***********************************/

let body = JSON.parse($response.body);

if(body.response){
  body.response = "{\"flag\":true,\"start_time\":1584674770,\"end_time\":4077660370,\"is_first_subscribe\":true,\"is_cancel_subscribe\":false,\"uid\":\"2005146104519054\",\"subscribe_uid\":\"2005146104519054\",\"subscribe_type\":\"auto\",\"authkey\":\"41137e7b949cc0534ac0d1dffc4814b0\",\"product_id\":\"\",\"subscribe_cycle\":0,\"cycle_unit\":\"\",\"space_cap\":0}"
}

body.data.start_time = 1584674770;
body.data.end_time = 4077660370;
body.data.is_cancel_subscribe = false;
body.data.flag = true;
body.data.subscribe_type = "auto";

$done({body: JSON.stringify(body)});
