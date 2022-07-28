/***********************************
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️
/*
[mitm]
hostname = *.duitang.com
[rewrite_local]
^https:\/\/www\.duitang\.com\/napi\/people\/me\/ url script-response-body https://raw.githubusercontent.com/Geekey101/-X-Public/main/-X-Public-Scripts/duitang.js
*/

***********************************/

let body = JSON.parse($response.body);

body.data.vip_end_at = 1871655312087;
body.data.vip_mechanism = 0;
body.data.vip_level = 11;
body.data.latest_vip_level = 11;
body.data.vip_remain = 0;
body.data.svip_mechanism = 1;
body.data.vip_end_at_mills = 1871655312087;
body.data.vip = true;

$done({body: JSON.stringify(body)});
