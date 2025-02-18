var obj = JSON.parse($response.body);

obj = {
  "data": {
    "user": {
      "inapps": [],
      "_id": "67b4169e63dd936cac95adfb",
      "bundleId": "NQK9JHKKX6.com.vfulup.vpn",
      "ip": "240e:30c:2303:4121:5d99:43e9:1e4d:f8ca",
      "country": "china",
      "city": null,
      "locationCode": "CN",
      "platform": "ios",
      "createdAt": "2025-02-18T05:11:58.528Z",
      "banned": false,
      "rated": false,
      "__v": 0,
      "isPremium": true
    },
    "advertisingEnabled": true,
    "connectionSecret": "u73s22IH8OxJjtEVdQJRLw4cyyFcxPJvNy1LoUNYPUTDqw4LecsH47enQxFRRcjyBb3xwU33NITOdNzSLLrGVWNNv7lbDcLZ6uZe",
    "effect": 0,
    "salt": "",
    "trialButton": {}
  }
};
  

$done({body: JSON.stringify(obj)});
