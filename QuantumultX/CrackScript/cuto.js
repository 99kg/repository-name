let obj = JSON.parse($response.body);
obj = {
  "userId": "q8cilww8sxom",
  "iosPro": true,
  "androidPro": true,
  "plus": true,
  "isFreePlus": false
};
$done({body: JSON.stringify(obj)});
