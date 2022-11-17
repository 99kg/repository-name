let obj = JSON.parse($response.body);
obj = {
  "request_date": "2022-11-17T06:56:20Z",
  "request_date_ms": 1668668180794,
  "subscriber": {
    "entitlements": {
      "com.nixwang.decision.entitlements.pro": {
        "expires_date": "2099-12-31T23:59:59Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.nixwang.decision.pro.annual",
        "purchase_date": "2022-11-17T06:55:17Z"
      }
    },
    "first_seen": "2022-11-17T06:53:57Z",
    "last_seen": "2022-11-17T06:53:57Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:2e33f520902a404c98e4ed62c6f38699",
    "original_application_version": "73",
    "original_purchase_date": "2019-04-22T11:48:35Z",
    "other_purchases": {},
    "subscriptions": {
      "com.nixwang.decision.pro.annual": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": "2099-12-31T06:55:17Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-11-17T06:55:18Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-11-17T06:55:17Z",
        "refunded_at": null,
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
};
$done({body: JSON.stringify(obj)});
