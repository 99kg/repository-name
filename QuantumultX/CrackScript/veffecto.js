var obj = JSON.parse($response.body);
obj = {
	"code" : 200,
	"data" : {
		"list" : [
			{
				"autoRenewProductId" : "yearly_premium",
				"orderId" : "600000729643467",
				"isTrialPeriod" : false,
				"endTime" : 4086063790000,
				"productId" : "yearly_premium",
				"productType" : 2,
				"startTime" : 1624612621000,
				"orderStatus" : 1,
				"autoRenewStatus" : false,
				"originalOrderId" : "600000729643467",
				"sign" : "3edbc2ac1a76bf188a97da9123450aba"
			}
		],
		"hasFreedTrialProds" : [
			"yearly_premium"
		],
		"systemDate" : 1624613122839,
		"hasPurchasedProds" : [
			"yearly_premium"
		]
	},
	"message" : "successful",
	"success" : true
};

$done({body: JSON.stringify(obj)});
