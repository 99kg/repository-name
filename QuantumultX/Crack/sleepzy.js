/*

[rewrite_local]
^https:\/\/subs\.platforms\.team\/apple\/verifyTransaction url script-response-body sleepzy.js
hostname = subs.platforms.team, 

*/
var obj = JSON.parse($response.body);
 obj= {
	"error": 0,
	"data": {
		"is_offer_eligible": true,
		"may_expire": false,
		"hash": "8888888",
		"consumable_inapp": [],
		"is_valid": true,
		"in_app": {
			"com.apalonapps.smartalarmfree.01y_365dt_SUB00004": {
				"expired": false,
				"may_expire": true,
				"cancelled": false,
				"is_valid": true,
				"is_trial": true,
				"is_intro": false,
				"transaction_id": "888888",
				"purchase_date_ms": "1588998426000",
				"expires_date_ms": "1999699999999",
				"remaining_time_ms": "60479700000"
			}
		}
	}
};
$done({body: JSON.stringify(obj)});
