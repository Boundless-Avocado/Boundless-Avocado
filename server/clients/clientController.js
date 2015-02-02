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
      process.stdout.write(message.sid);
    });
  },

  sendEmail: function(subject, message, address) {
    var email = new sendgrid.Email();
    email.addTo(address);
    email.setFrom('david@dsernst.com');
    email.setSubject(subject);
    email.setHtml(message);
    sendgrid.send(email);
  }
};
