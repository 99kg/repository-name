var obj = JSON.parse($response.body);
obj = {
	"status": "ok",
	"is_valid": true,
	"expiration_date": "2088-08-08T08:08:08Z",
	"is_trial": false,
	"processing_count": 5,
	"is_introductory_used": true,
	"product_id": "",
	"promotional_offer_id": "",
	"is_grace_period": false,
	"auto_renew_enabled": false,
	"is_in_billing_retry_period": true,
	"subscription_type": "annual",
	"platform": "ios",
	"is_bonus": true,
	"bonus_days_added": 0,
	"device_user_info": {
		"auth_type": "",
		"subscription_valid": true
	}
};

$done({body: JSON.stringify(obj)});