const razorpay = require("razorpay");
const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET;
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_LUCKYDRAW_BASE_ID = process.env.AIRTABLE_LUCKYDRAW_BASE_ID;
const AIRTABLE_MAIN_TABLE = process.env.AIRTABLE_MAIN_TABLE;
var rn = require('random-number');
var Airtable = require('airtable');
var base = new Airtable({apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_LUCKYDRAW_BASE_ID);
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function saveData(data){
   return new Promise(resolve => {
    base(AIRTABLE_MAIN_TABLE).create([
        {
          "fields": data,
        },
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        resolve(records)
        records.forEach(function (record) {
            // console.log(record)
          console.log(record.getId());
        });
      });
   })
}
async function sendMailToUser(data){
    try {
        const msg = {
            to: data.email,
            from: {
                email: process.env.SENDGRID_SENDER, //verified sender
                name: process.env.SENDGRID_SENDER_NAME
            },
            templateId: process.env.SENDGRID_MESSAGE_TEMPLATE_ID_BRITEBROTHERS,         
            dynamicTemplateData:{
            ...data,
            createdAt: (new Date()).toDateString()
        }
      }
     await sgMail.send(msg)   
    } catch (error) {
     console.error(error);        
    }
}
export default async function PaymentHandler(req,res){
    let reqBody = req.body, signature = req.headers["x-razorpay-signature"];
    if(reqBody.event === 'order.paid'){
        let paymentPayload = reqBody.payload.payment.entity;
        let ticketNumber = rn.generator({
            min:  1000,
            max:  10000,
           integer: true
        })
        let data = {
            paymentId :paymentPayload.id,
            name: paymentPayload.notes.full_name,
            email: paymentPayload.notes.email,
            phone: paymentPayload.notes.phone,
            address: paymentPayload.notes.address,
            ticketNumber:ticketNumber()+"", 
        }
        await saveData(data);
        await sendMailToUser(data)
        console.log(data)
        if(signature){
            console.log("is signature valid");
            console.log(razorpay.validateWebhookSignature(JSON.stringify(reqBody, null, 2), signature, WEBHOOK_SECRET));
        }
    }
    
    res.send("thanks")
}