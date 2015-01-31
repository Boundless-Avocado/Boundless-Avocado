//twilio
// var keys = require('../keys');

var client = require('twilio')(process.env.twilio_accountSid, process.env.twilio_authToken);
 
exports.twilio = function(){
  client.messages.create({
      body: "Twilio is my bitch",
      to: "+14157062795",
      from: "+14158149655"
  }, function(err, message) {
      process.stdout.write(message.sid);
  });
};

//sendgrid

var sendgrid = require("sendgrid")(process.env.sendgrid_api_user, process.env.sendgrid_api_key);

exports.sendgrid = function(){
  var email = new sendgrid.Email();
  email.addTo("mdelucco@gmail.com");
  email.setFrom("david@dsernst.com");
  email.setSubject("Sending with SendGrid is Fun");
  email.setHtml("and easy to do anywhere, even with Node.js");
  sendgrid.send(email);
};



