import nodemailer from 'nodemailer';

class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, 
      auth: {
        user: 'siddheshj039@gmail.com', 
        pass: 'asco tgpp gghs mvxs' 
      }
    });
  }

  async sendEmail(to: string, subject: string, text: string, html?: string): Promise<void> {
    const mailOptions = {
      from: '"Siddhesh Jadhav" siddheshj039@gmail.com', 
      to: to,
      subject: subject,
      text: text,
      html: html
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent: %s', info.messageId);
    } catch (error) {
      console.error('Error sending email: %s', error);
    }
  }
}

export default EmailService;