require('dotenv').config();
const sendMail = require('sendmail')();

const { CONTACT_TO_EMAIL_ADDRESS, FROM_EMAIL_ADDRESS } = process.env;

exports.handler = (event, context, callback) => {
  const clientIP = event.headers['client-ip'];
  const url = JSON.parse(event.body);

  const descriptor = {
    from: `"domar.us website" <${FROM_EMAIL_ADDRESS}>`,
    to: CONTACT_TO_EMAIL_ADDRESS,
    subject: `A new HighFive for ${url} from ${clientIP}`,
    html: 'Someone like your photos. Nice :P',
  };

  sendMail(descriptor, (e) => {
    if (e) {
      return callback(null, {
        statusCode: 500,
        body: { message: e.message, descriptor },
      });
    }
    return callback(null, {
      statusCode: 200,
      body: '',
    });
  });
};
