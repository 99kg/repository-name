let obj = JSON.parse($response.body);
obj = {
  "request_date": "2022-11-10T08:40:12Z",
  "request_date_ms": 1668069612850,
  "subscriber": {
    "entitlements": {
      "grow.pro": {
        "expires_date": "2099-11-17T08:39:25Z",
        "grace_period_expires_date": null,
        "product_identifier": "grow_1y_128",
        "purchase_date": "2022-11-10T08:39:25Z"
      }
    },
    "first_seen": "2022-11-10T08:38:12Z",
    "last_seen": "2022-11-10T08:38:12Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:79e284f48e094070869f09706104137d",
    "original_application_version": "823",
    "original_purchase_date": "2022-09-13T11:08:05Z",
    "other_purchases": {},
    "subscriptions": {
      "grow_1y_128": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": "2099-11-17T08:39:25Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-11-10T08:39:26Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-11-10T08:39:25Z",
        "refunded_at": null,
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
};
$done({body: JSON.stringify(obj)});
