/*
pillow unlock vip

QX：
^https:\/\/api\.revenuecat\.com\/v1\/receipts url script-response-body pillow.js
api.revenuecat.com
*/

var obj = JSON.parse($response.body);
obj = {
  "request_date": "2020-03-11T07:09:49Z",
	"request_date_ms": 1581750589992,
	"subscriber": {
		"entitlements": {
			"premium": {
				"expires_date": "2028-08-08T08:08:08Z",
				"product_identifier": "com.neybox.pillow.premium.year",
				"purchase_date": "2020-03-11T07:07:58Z"
			}
		},
		"first_seen": "2020-02-14T20:28:01Z",
		"last_seen": "2020-02-14T20:28:01Z",
		"non_subscriptions": {},
		"original_app_user_id": "5D4452CE-CF16-45D0-9D68-B82024CD2933",
		"original_application_version": "216",
		"original_purchase_date": "2020-02-14T20:26:59Z",
		"other_purchases": {},
		"subscriptions": {
			"com.neybox.pillow.premium.year": {
				"billing_issues_detected_at": null,
				"expires_date": "2028-08-08T08:08:08Z",
				"is_sandbox": false,
				"original_purchase_date": "2020-03-11T07:07:58Z",
				"period_type": "trial",
				"purchase_date": "2020-03-11T07:07:58Z",
				"store": "app_store",
				"unsubscribe_detected_at": null
			}
		}
	}
};

$done({body: JSON.stringify(obj)});