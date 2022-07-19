const path1 = "/devices";
const path2 = "/user_sub_status";
const path3 = "/profile/";
let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
    obj.license = {
    "status": "sub",
    "expireTime": 4102494057000
  };
 };
  
if ($request.url.indexOf(path2) != -1){
    obj = {
    "_code": 200,
    "ios": {
    "status": "sub",
    "expireTime": 4102494057000
  }};
 };

if ($request.url.indexOf(path3) != -1){
  obj.sub = {
    "ios": {
      "status": "sub",
      "expireTime": 4102494057000,
      "buyable": 0
    }};
  };
  
$done({body: JSON.stringify(obj)});
