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
body = $response.body.replace(/vip_end_at":\d+/g, 'vip_end_at":1871655312087').replace(/vip_level":\d+/g, 'vip_level":11').replace(/latest_vip_level":\d+/g, 'latest_vip_level":11').replace(/svip_mechanism":\d+/g, 'svip_mechanism":1'). replace(/vip_end_at_mills":\d+/g, 'vip_end_at_mills":1871655312087'). eplace(/vip":\w+/g, 'vip":true');
$done({body});
