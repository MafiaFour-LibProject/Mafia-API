const transporter = require("../config/nodemailer");

exports.sendEmail = async ({ to, subject, html }) => {
  const mailOptions = {
    from: `"Mafia Health" <${process.env.MAIL_USER}>`,
    to,
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
};