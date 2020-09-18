/*
智能证件照 VIP

^http:\/\/certificate\.yiyongcad\.com\/api\/v4\/virtualactregister url script-response-body task/others/zhineng.js

hostname = certificate.yiyongcad.com
*/

var obj = JSON.parse($response.body);

obj["userinfo"]["vip"] = 
[
  {
    "id": "9005757",
    "auth_type": 1,
    "auth_value": 1999999999
  }
];

$done({body: JSON.stringify(obj)});