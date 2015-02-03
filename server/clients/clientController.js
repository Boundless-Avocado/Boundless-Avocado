// var keys = require('../keys.js');

var twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var sendgrid = require('sendgrid')(process.env.SENDGRID_API_USER, process.env.SENDGRID_API_KEY);

module.exports = {
  sendSMS: function(message, number) {
    twilio.messages.create({
      body: message,
      to: number,
      from: '+14158149655'
    }, function(err, message) {
      if (err) {
        return console.error(err);
      }
      console.log(message);
    });
  },

  sendEmail: function(subject, message, address, cc) {
    var email = new sendgrid.Email({
      to: address,
      from: 'guac-bot@guac.dsernst.com',
      subject: subject,
      html: message
    });
    email.replyto = cc;
    sendgrid.send(email, function(err, json) {
      if (err) {
        return console.error(err);
      }
      console.log(json);
    });
  }
};
