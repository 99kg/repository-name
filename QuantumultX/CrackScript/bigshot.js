var obj = JSON.parse($response.body);
obj = {
  "extraInfo": {},
  "data": {
    "llsid": "7744775500788537976",
    "userInfo": {
      "userId": "100025944",
      "nickName": "Nostalgie_คิดถึง²³🔆",
      "headUrl": "http://tx-bigshot.static.yximgs.com/mediacloud/bigshot/video/eSrqjcmrGh28xRT0QpbMOiFoKvM-WVi0WEOOC94SAl4",
      "birthday": "2000-01-01",
      "gender": "U",
      "description": "",
      "signature": "",
      "isVip": 1,
      "memberId": 666666,
      "userNumber": 100025944,
      "vipStartTime": 0,
      "vipEndTime": 0,
      "type": 0,
      "followStatus": 2
    },
    "portfolios": [],
    "favorites": [],
    "followCnt": 0,
    "fansCnt": 0,
    "favoriteCnt": 0,
    "followStatus": 2,
    "likedCnt": 0,
    "nextCursor": "-1",
    "shareUrl": "https://h5.vnision.com/html/vnision/share/users/index.html?uid=5xuv5y83db8ntri"
  },
  "status": 0,
  "message": "success",
  "serverTm": 1607439067441
};

$done({body: JSON.stringify(obj)});
