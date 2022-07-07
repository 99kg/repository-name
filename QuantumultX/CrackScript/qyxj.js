/***********************************
[rewrite_local]
# 轻颜相机
https://commerce-api.faceu.mobi/commerce/v1/subscription/user_info url script-response-body https://raw.githubusercontent.com/99kg/repository-name/master/QuantumultX/CrackScript/qyxj.js

[mitm] 
hostname=commerce-api.faceu.mobi
***********************************/

let body = JSON.parse($response.body);

body.data.start_time = 1584674770;
body.data.end_time = 4077660370;
body.data.is_cancel_subscribe = false;
body.data.flag = true;

$done({body: JSON.stringify(body)});
