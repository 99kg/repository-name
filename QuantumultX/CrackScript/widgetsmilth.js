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
	"request_date": "2020-11-17T05:22:47Z",
	"request_date_ms": 1605590567936,
	"subscriber": {
		"entitlements": {
			"pro": {
				"expires_date": "2050-11-20T05:22:16Z",
				
				"product_identifier": "rc_monthly",
				"purchase_date": "2020-11-17T05:22:16Z"
			}
		},
		"first_seen": "2020-11-17T05:12:16Z",
		"last_seen": "2020-11-17T05:12:16Z",
		"management_url": null,
		"non_subscriptions": {},
		"original_app_user_id": "$RCAnonymousID:f3a0e4f4e4eb43e99328d72720b0a1ff",
		"original_application_version": "56",
		"original_purchase_date": "2020-11-16T14:58:05Z",
		"other_purchases": {},
		"subscriptions": {
			"rc_monthly": {
				"billing_issues_detected_at": null,
				"expires_date": "2050-11-20T05:22:16Z",
				"is_sandbox": false,
				"original_purchase_date": "2020-11-17T05:22:17Z",
				"period_type": "trial",
				"purchase_date": "2020-11-17T05:22:16Z",
				"store": "app_store",
				"unsubscribe_detected_at": null
			}
		}
	}
};

$done({body: JSON.stringify(obj)});