/*
widgetsmilth unlock vip

QX:
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/99kg/repository-name/master/QuantumultX/CrackScript/widgetsmilth.js

[mitm]
hostname = api.revenuecat.com,
*/


var obj = JSON.parse($response.body);
obj = {
	"request_date": "2020-11-17T06:53:21Z",
	"request_date_ms": 1605596001040,
	"subscriber": {
		"entitlements": {
			"Premium": {
				"expires_date": "2088-12-17T06:52:31Z",
				"grace_period_expires_date": null,
				"product_identifier": "PremiumYearlyWidgetsmith",
				"purchase_date": "2020-11-17T06:52:31Z"
			}
		},
		"first_seen": "2020-11-17T05:54:28Z",
		"last_seen": "2020-11-17T05:54:28Z",
		"management_url": "itms-apps://apps.apple.com/account/subscriptions",
		"non_subscriptions": {},
		"original_app_user_id": "$RCAnonymousID:f3a0e4f4e4eb43e99328d72720b0a1ff",
		"original_application_version": "56",
		"original_purchase_date": "2020-11-16T14:58:05Z",
		"other_purchases": {},
		"subscriptions": {
			"PremiumYearlyWidgetsmith": {
				"billing_issues_detected_at": null,
				"expires_date": "2088-12-17T06:52:31Z",
				"grace_period_expires_date": null,
				"is_sandbox": false,
				"original_purchase_date": "2020-11-17T06:52:33Z",
				"period_type": "normal",
				"purchase_date": "2020-11-17T06:52:31Z",
				"store": "app_store",
				"unsubscribe_detected_at": "2020-11-17T06:53:20Z"
			}
		}
	}
};

$done({body: JSON.stringify(obj)});