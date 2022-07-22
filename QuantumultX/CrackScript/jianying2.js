let body = JSON.parse($response.body);

body.response = "{\"vip_flag\":true}"
body.data.vip_flag = true;

$done({body: JSON.stringify(body)});
