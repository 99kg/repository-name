var obj = JSON.parse($response.body);

obj = {
  "request_date": "2023-12-26T05:25:09Z",
  "request_date_ms": 1703568309408,
  "subscriber": {
    "entitlements": {
      "AllPro": {
        "expires_date": "2099-01-02T05:22:56Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.shi.Globetrotter.year",
        "purchase_date": "2023-12-26T05:22:56Z"
      }
    },
    "first_seen": "2023-12-26T05:23:39Z",
    "last_seen": "2023-12-26T05:23:39Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:e2062ace55ac4a29b363a77e8080fcf7",
    "original_application_version": null,
    "original_purchase_date": "2023-12-26T05:22:57Z",
    "other_purchases": {},
    "subscriptions": {
      "com.shi.Globetrotter.year": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": "2099-01-02T05:22:56Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2023-12-26T05:22:57Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2023-12-26T05:22:56Z",
        "refunded_at": null,
        "store": "app_store",
        "store_transaction_id": "200001890289770",
        "unsubscribe_detected_at": null
      }
    }
  }
};

$done({body: JSON.stringify(obj)});
