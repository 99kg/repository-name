/***********************************
[rewrite_local]
# 轻颜相机
https://commerce-api.faceu.mobi/commerce/v1/subscription/user_info url script-response-body https://raw.githubusercontent.com/99kg/repository-name/master/QuantumultX/CrackScript/qyxj.js

[mitm] 
hostname=commerce-api.faceu.mobi
***********************************/

let body = JSON.parse($response.body);

body.data.start_time = 1661493402;
body.data.end_time = 4102415999;
body.data.is_cancel_subscribe = false;
body.data.flag = true;
body.data.subscribe_type = "auto";
body.data.cycle_unit = "YEAR";

if(body.response){
     var tmp = JSON.parse(body.response);
     tmp.start_time = 1661493402;
     tmp.end_time = 4102415999;
     tmp.is_cancel_subscribe = false;
     tmp.subscribe_type = "auto";
     tmp.flag = true;
     tmp.cycle_unit = "YEAR";
     body.response =  JSON.stringify(tmp);  
}

$done({body: JSON.stringify(body)});
