var obj = JSON.parse($response.body);

obj = {
  "meta": {
    "code": 0,
    "msg": "",
    "error": "",
    "request_uri": "/vip/user_info",
    "reqid": "8c841a1a5296d580e0d175d027d6ca3e"
  },
  "response": {
    "status": 1,
    "agreement_status": 2,
    "agreement_platform": 1,
    "expire_date": "2030-07-14",
    "expire_time": "2030-07-14 00:00:00",
    "period_type": 2,
    "product_type": 2,
    "permission": [],
    "type": 3,
    "ad_vip_type": 4,
    "discount_status": 64,
    "account": {
      "id": 1497457618,
      "screen_name": "Nostalgie_",
      "avatar": "http://maavatar1.meitudata.com/5b106ba61e33c6123.jpg"
    }
  }
};

$done({body: JSON.stringify(obj)});
