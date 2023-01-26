let obj = JSON.parse($response.body);
obj = {
  "request_date_ms" : 1674191584082,
  "request_date" : "2023-01-20T05:13:04Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-01-18T02:45:20Z",
    "original_application_version" : "1.6",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.miiiao.MySticker.monthly" : {
        "original_purchase_date" : "2023-01-20T05:10:07Z",
        "expires_date" : "2099-12-31T05:10:03Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-01-20T05:10:03Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "mysticker premium" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-01-20T05:10:03Z",
        "product_identifier" : "com.miiiao.MySticker.monthly",
        "expires_date" : "2099-12-31T05:10:03Z"
      }
    },
    "original_purchase_date" : "2023-01-18T02:43:33Z",
    "original_app_user_id" : "$RCAnonymousID:50b9c1d6ea1e4825bfe68ef7bb394a78",
    "last_seen" : "2023-01-20T05:06:51Z"
  }
};
$done({body: JSON.stringify(obj)});
