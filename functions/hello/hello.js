// require('dotenv').config();
const sendMail = require('sendmail')();

exports.handler = (event, context, callback) => {
  const clientIP = event.headers['client-ip'];
  const url = JSON.parse(event.body);

  const descriptor = {
    from: '"domar.us website" <mdomarus@gmail.com>',
    to: 'mdomarus@gmail.com',
    subject: `A new HighFive for ${url} from ${clientIP}`,
  };

  sendMail(descriptor, (e) => {
    if (e) {
      return callback(null, {
        statusCode: 500,
        body: e.message,
      });
    }
    return callback(null, {
      statusCode: 200,
      body: '',
    });
  });
};
