var soap = require('soap');
var wsdl_url = './QueryOutoundDeliveryIn.wsdl';
var auth = "Basic " + new Buffer("USERNAME" + ":" + "PASSWORD").toString("base64");
var args = {
		OutboundDeliveryFindByElementsRequestMessageBody : {
			SelectionByDateShippingDateTime:[
				{
					InclusionExclusionCode : "I",
					IntervalBoundaryTypeCode: "9",
					LowerBoundaryDateTime : {
						 attributes : {
						 	timeZoneCode : "UTC+1"
						 },
						 $value : "2018-06-07T10:18:00Z"
					}
				}

			]

		},

		ProcessingConditions : {
			QueryHitsMaximumNumberValue : {
				$value : 10
			},
			QueryHitsUnlimitedIndicator : true
		}
};
soap.createClient(wsdl_url,{ endpoint :'https://myxxxxx.sapbydesign.com/xxxxxxx' },function(err, client) {
  
  client.addHttpHeader('Authorization',auth);
  client.FindByElements(args, function(err, result) {
      console.log(result);
  });
});