# Example calling SOAP BYD from NodeJS
code in index.js will produce soap message like this below 

```

<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ccts="urn:un:unece:uncefact:documentation:standard:CoreComponentsTechnicalSpecification:3.0" xmlns:n1="http://sap.com/xi/SAPGlobal20/Global" xmlns:n2="http://sap.com/xi/AP/Common/Global" xmlns:n3="http://sap.com/xi/BASIS/Global" xmlns:n4="http://sap.com/xi/AP/Common/GDT" xmlns:rfc="urn:sap-com:sap:rfc:functions" xmlns:sapblock="http://www.sap.com/NW05/soap/features/blocking/" xmlns:sapcentraladmin="http://www.sap.com/webas/700/soap/features/CentralAdministration/" xmlns:sapcomhnd="http://www.sap.com/NW05/soap/features/commit/" xmlns:sapdoc="urn:sap:esi:documentation" xmlns:saprmnw05="http://www.sap.com/NW05/soap/features/wsrm/" xmlns:sapsession="http://www.sap.com/webas/630/soap/features/session/" xmlns:sapsp="http://www.sap.com/webas/630/soap/features/security/policy" xmlns:saptrhnw05="http://www.sap.com/NW05/soap/features/transaction/" xmlns:saptrnbnd="http://www.sap.com/webas/710/soap/features/transportbinding/" xmlns:sidl="http://www.sap.com/2007/03/sidl" xmlns:sp="http://docs.oasis-open.org/ws-sx/ws-securitypolicy/200702" xmlns:tns="http://sap.com/xi/A1S/Global" xmlns:wst="http://docs.oasis-open.org/ws-sx/ws-trust/200512" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns:xi0="http://sap.com/xi/SAPGlobal20/Global" xmlns:xi1="http://sap.com/xi/AP/Common/Global" xmlns:xi2="http://sap.com/xi/A1S/Global" xmlns:xi3="http://sap.com/xi/BASIS/Global" xmlns:xi4="http://sap.com/xi/AP/Common/GDT" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <soap:Body>
      <n1:OutboundDeliveryFindByElementsQuery_sync>
         <OutboundDeliveryFindByElementsRequestMessageBody>
            <SelectionByDateShippingDateTime>
               <InclusionExclusionCode>I</InclusionExclusionCode>
               <IntervalBoundaryTypeCode>9</IntervalBoundaryTypeCode>
               <LowerBoundaryDateTime timeZoneCode="UTC+1">2018-06-07T10:18:00Z</LowerBoundaryDateTime>
            </SelectionByDateShippingDateTime>
         </OutboundDeliveryFindByElementsRequestMessageBody>
         <ProcessingConditions>
            <QueryHitsMaximumNumberValue>10</QueryHitsMaximumNumberValue>
            <QueryHitsUnlimitedIndicator>true</QueryHitsUnlimitedIndicator>
         </ProcessingConditions>
      </n1:OutboundDeliveryFindByElementsQuery_sync>
   </soap:Body>
</soap:Envelope>
```


## Response will be parsed to JSON in this format below
in console.log(result)  will output like this below
```
{
   "OutboundDelivery": [
      {
         "OutboundDeliveryUUID": "00163e64-118a-1ee8-9bd8-9d550b18013e",
         "OutboundDeliveryID": "610",
         "OutboundDeliveryProcessingTypeCode": "OB",
         "OutboundDeliveryReleaseStatusCode": "3"
      }
   ],
   "ProcessingConditions": {
      "ReturnedQueryHitsNumberValue": "1",
      "MoreHitsAvailableIndicator": "false",
      "LastReturnedObjectID": "00163E64118A1EE89BD89D550B18013E"
   },
   "Log": null
}

```


### Enjoy Coding !!