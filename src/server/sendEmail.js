const nodemailer = require('nodemailer');

let email = 'santa@northpole.com';
let subject = 'Pending Wishes';

const sendEmail = (message) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PWD
    }
  });

  const mailOptions = {
    from: 'do_not_reply@northpole.com',
    to: email,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Error: ', error);
    }
    console.log('Email sent: ' + info.response);
  });
};

module.exports = {sendEmail};