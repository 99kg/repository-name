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
