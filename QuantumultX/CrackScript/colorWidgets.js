/*
color Widgets unlock vip

QX:
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/99kg/repository-name/master/QuantumultX/CrackScript/colorWidgets.js

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
				"grace_period_expires_date": null,
				"product_identifier": "cw_199_1m_3d0",
				"purchase_date": "2020-11-17T05:22:16Z"
			}
		},
		"first_seen": "2020-11-17T05:12:16Z",
		"last_seen": "2020-11-17T05:12:16Z",
		"management_url": "itms-apps://apps.apple.com/account/subscriptions",
		"non_subscriptions": {},
		"original_app_user_id": "$RCAnonymousID:2beb7d5e42c34a78ba85bca2759ee6a4",
		"original_application_version": "1",
		"original_purchase_date": "2020-11-16T14:58:29Z",
		"other_purchases": {},
		"subscriptions": {
			"cw_199_1m_3d0": {
				"billing_issues_detected_at": null,
				"expires_date": "2050-11-20T05:22:16Z",
				"grace_period_expires_date": null,
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