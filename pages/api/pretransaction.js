import { resolve } from 'path';

const https = require('https');
const PaytmChecksum = require('PaytmChecksum');
export default async function handler(req, res) {
var paytmParams = {};
if(req.method=='POST'){


paytmParams.body = {
    "requestType"  : "Payment",
    "mid"  : process.env.NEXT_PUBLIC_PAYTM_MID,
    "websiteName" : "YOUR_WEBSITE_NAME",
    "orderId": req.body.oid,
    "callbackUrl"  : `${process.env.NEXT_PUBLIC_HOST}/api/posttxn`,
    "txnAmount"  : {
        "value"  : req.body.subTotal,
        "currency" : "INR",
    },
    "userInfo"      : {
        "custId"    : req.body.email,
    },
};


const checkSum = await PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), process.env.NEXT_PUBLIC_PAYTM_KEY)

    paytmParams.head = {
        "signature"    : checkSum
    };

    var post_data = JSON.stringify(paytmParams);

const reqAsync=async()=>{
    return new Promise((resolve,reject)=>{
          var options = {

                    /* for Staging */
            //         hostname: 'securegw-stage.paytm.in',
            
                    /* for Production */
                     hostname: 'securegw.paytm.in',
            
                    port: 443,
                    path: `/theia/api/v1/initiateTransaction?mid=${process.env.NEXT_PUBLIC_PAYTM_MID}&orderId=${req.body.oid}`,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length
                    }
                };
            
                var response = "";
                var post_req = https.request(options, function(post_res) {
                    post_res.on('data', function (chunk) {
                        response += chunk;
                    });
            
                    post_res.on('end', function(){
                        console.log('Response: ', response);
            resolve(response)
                    });
                });
            
                post_req.write(post_data);
                post_req.end();
    })
}
let myr = await  reqAsync()
res.status(200).json(myr)

}
}