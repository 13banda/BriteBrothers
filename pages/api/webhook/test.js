
const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET;
        const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
        const AIRTABLE_LUCKYDRAW_BASE_ID = process.env.AIRTABLE_LUCKYDRAW_BASE_ID;
        const AIRTABLE_MAIN_TABLE = process.env.AIRTABLE_MAIN_TABLE;
        var rn = require('random-number');
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_LUCKYDRAW_BASE_ID);
export default (req,res) => {
    base('users').select({
        view: 'Grid view',
        filterByFormula: "address = '6ps'"
    }).firstPage(function(err, records) {
        if (err) { console.error(err); return; }
        records.forEach(function(record) {
            console.log('Retrieved', record.get("paymentId"));
        });
    });
   res.status(403).send('ok')            
}