var obj = JSON.parse($response.body);
obj = {
  "request_date_ms" : 1669441109321,
  "request_date" : "2022-11-26T05:38:29Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-11-26T05:22:04Z",
    "original_application_version" : "928",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "happy_449_1y" : {
        "original_purchase_date" : "2022-11-26T05:36:39Z",
        "expires_date" : "2099-12-31T05:36:38Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2022-11-26T05:36:38Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-26T05:36:38Z",
        "product_identifier" : "happy_449_1y",
        "expires_date" : "2099-12-31T05:36:38Z"
      }
    },
    "original_purchase_date" : "2022-11-26T04:36:44Z",
    "original_app_user_id" : "$RCAnonymousID:6fbb398a8ca14b9b9ca9427a7d535a0c",
    "last_seen" : "2022-11-26T05:22:04Z"
  }
};

$done({body: JSON.stringify(obj)});
