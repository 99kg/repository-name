var obj = JSON.parse($response.body);

obj = {
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1614412258,
    "receipt_creation_date" : "2023-03-23 05:37:45 Etc/GMT",
    "bundle_id" : "ichibann.tomato",
    "original_purchase_date" : "2023-03-23 05:05:57 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1583582900000",
        "expires_date" : "2029-10-10 17:10:10 Etc/GMT",
        "expires_date_pst" : "2029-10-10 10:10:10 America/Los_Angeles",
        "is_in_intro_offer_period" : "true",
        "transaction_id" : "160000697999817",
        "is_trial_period" : "true",
        "original_transaction_id" : "160000697999817",
        "purchase_date" : "2020-03-07 12:08:20 Etc/GMT",
        "product_id" : "com.v43years.avatarify2.yearlyInApp",
        "original_purchase_date_pst" : "2020-03-07 04:08:21 America/Los_Angeles",
        "original_purchase_date_ms" : "1583582901000",
        "web_order_line_item_id" : "160000247470578",
        "expires_date_ms" : "1886346610000",
        "purchase_date_pst" : "2020-03-07 04:08:20 America/Los_Angeles",
        "original_purchase_date" : "2020-03-07 12:08:21 Etc/GMT"
      }
    ],
    "adam_id" : 1614412258,
    "receipt_creation_date_pst" : "2023-03-22 22:37:45 America/Los_Angeles",
    "request_date" : "2023-03-23 05:38:19 Etc/GMT",
    "request_date_pst" : "2023-03-22 22:38:19 America/Los_Angeles",
    "version_external_identifier" : 855511638,
    "request_date_ms" : "1679549899193",
    "original_purchase_date_pst" : "2023-03-22 22:05:57 America/Los_Angeles",
    "application_version" : "2023030701",
    "original_purchase_date_ms" : "1679547957000",
    "receipt_creation_date_ms" : "1679549865000",
    "original_application_version" : "2023030701",
    "download_id" : 502284752284927730
  },
  "status" : 0,
  "environment" : "Production"
};

$done({body: JSON.stringify(obj)});
