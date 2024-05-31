let obj = JSON.parse($response.body);
obj = {
  "status": 1001,
  "message": "",
  "result": {
    "is_member": 1,
    "time_from": "2024-01-11",
    "time_to": "2999-12-31",
    "member_type": 1
  }
};
$done({body: JSON.stringify(obj)});
