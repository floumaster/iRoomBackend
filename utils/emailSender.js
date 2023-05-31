const nodemailer = require('nodemailer');

const sendEmails = async (emails, subject, text) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'iroombookingsystem@gmail.com',
        pass: 'vdpljhiynpaphqtv',
      },
    });
    await transporter.sendMail({
        from: 'iRoom <iroombookingsystem@gmail.com>',
        to: emails,
        subject: subject,
        html: text
    });
}

module.exports = sendEmails