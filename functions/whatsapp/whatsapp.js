require('dotenv').config();

const { accountSid, authToken } = process.env;
const client = require('twilio')(accountSid, authToken);

exports.handler = (event, context, callback) => {
  const clientIP = event.headers['client-ip'];
  const url = JSON.parse(event.body);

  client.messages
    .create({
      from: 'whatsapp:+14155238886',
      body: `Your ${url} code is ${clientIP}`,
      to: 'whatsapp:+447982860760',
    })
    .catch((err) => callback(null, {
      statusCode: 500,
      body: err.toString(),
    }));
  return callback(null, {
    statusCode: 200,
    body: '',
  });
};
