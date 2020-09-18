/*
VOCHI unlock vip

QX：
^https:\/\/api\.revenuecat\.com\/v1\/subscribers url script-response-body VOCHI.js
api.revenuecat.com
*/


var obj = JSON.parse($response.body);
obj = {
  "request_date": "2020-04-15T15:32:27Z",
  "request_date_ms": 1586964747056,
  "subscriber": {
    "entitlements": {
      "pro": {
        "expires_date": "2222-05-15T15:23:36Z",
        "product_identifier": "vochi_monthly",
        "purchase_date": "2020-04-15T15:23:36Z"
      }
    },
    "first_seen": "2020-04-02T07:01:24Z",
    "last_seen": "2020-04-15T15:32:03Z",
    "management_url": "itms-apps://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:a0cadd7f5c7e45e6b323357e0b8a7d17",
    "original_application_version": "155",
    "original_purchase_date": "2020-04-02T07:00:18Z",
    "other_purchases": {},
    "subscriptions": {
      "vochi_monthly": {
        "billing_issues_detected_at": null,
        "expires_date": "2222-05-15T15:23:36Z",
        "is_sandbox": false,
        "original_purchase_date": "2020-04-02T07:16:10Z",
        "period_type": "normal",
        "purchase_date": "2020-04-15T15:23:36Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
};

$done({body: JSON.stringify(obj)});

re('"user_pro":\\w+', '"user_pro":yes')

function re() {
    var body = $response.body;
    if (arguments[0].includes("@")) {
        var regs = arguments[0].split("@");
        var strs = arguments[1].split("@");
        for (i = 0; i < regs.length; i++) {
            var reg = new RegExp(regs[i], "g");
            body = body.replace(reg, strs[i]);
        }
    } else {
        var reg = new RegExp(arguments[0], "g");
        body = body.replace(reg, arguments[1]);
    }
    $done(body);
}