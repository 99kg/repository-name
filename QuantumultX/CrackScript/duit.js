let obj=JSON.parse($response.body);

obj.data.vip_end_at=1871655312087;
obj.data.vip_mechanism=0;
obj.data.vip_level=11;
obj.data.latest_vip_level=11;
obj.data.vip_remain=0;
obj.data.svip_mechanism=1;
obj.data.vip_end_at_mills=1871655312087;
obj.data.vip=true;

$done({body: JSON.stringify(obj)});
