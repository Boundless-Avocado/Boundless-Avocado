//twilio
// var keys = require('../keys');

var client = require('twilio')(process.env.twilio_accountSid, process.env.twilio_authToken);
 
exports.twilio = function(message, number){
  client.messages.create({
      body: message,
      to: number,
      from: "+14158149655"
  }, function(err, message) {
      process.stdout.write(message.sid);
  });
};

//sendgrid

var sendgrid = require("sendgrid")(process.env.sendgrid_api_user, process.env.sendgrid_api_key);

exports.sendgrid = function(subject, message, address){
  var email = new sendgrid.Email();
  email.addTo(address);
  email.setFrom("david@dsernst.com");
  email.setSubject(subject);
  email.setHtml(message);
  sendgrid.send(email);
};



