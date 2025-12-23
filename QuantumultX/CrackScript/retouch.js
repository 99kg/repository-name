let obj = JSON.parse($response.body);
obj = {
    "request_date_ms" : 1675067482130,
  "request_date" : "2023-01-30T08:31:22Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-01-30T08:29:07Z",
    "original_application_version" : "107",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "tr5_yearlysubsc_40dlrs_cancel_discounted" : {
        "original_purchase_date" : "2023-01-30T08:29:24Z",
        "expires_date" : "2099-12-31T08:29:22Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2023-01-30T08:29:22Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "premium" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-01-30T08:29:22Z",
        "product_identifier" : "tr5_yearlysubsc_40dlrs_cancel_discounted",
        "expires_date" : "2099-12-31T08:29:22Z"
      }
    },
    "original_purchase_date" : "2023-01-30T08:27:27Z",
    "original_app_user_id" : "$RCAnonymousID:ac9d3cec037847f6971d478444ba42d6",
    "last_seen" : "2023-01-30T08:29:07Z"
  }
};
$done({body: JSON.stringify(obj)});
