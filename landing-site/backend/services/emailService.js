const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = null;
    this.initializeTransporter();
  }

  initializeTransporter() {
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('Email configuration missing. Email notifications will be skipped.');
      return;
    }

    this.transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  async sendLeadNotification(leadData) {
    if (!this.transporter) {
      console.log('Email transporter not configured. Skipping email notification.');
      return;
    }

    const subject = `New Lead: ${leadData.interest} - ${leadData.orgType}`;
    
    const htmlContent = `
      <h2>New Lead Submission</h2>
      <p><strong>Name:</strong> ${leadData.fullName}</p>
      <p><strong>Email:</strong> ${leadData.email}</p>
      <p><strong>Phone:</strong> ${leadData.phone || 'Not provided'}</p>
      <p><strong>Organization Type:</strong> ${leadData.orgType}</p>
      <p><strong>Interest:</strong> ${leadData.interest}</p>
      <p><strong>Source:</strong> ${leadData.source}</p>
      <p><strong>Page:</strong> ${leadData.page}</p>
      <p><strong>Submitted:</strong> ${leadData.createdAt.toLocaleString()}</p>
      
      <h3>Message:</h3>
      <p>${leadData.message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><em>This lead was submitted through the ProgrammoCeuticals landing site.</em></p>
    `;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL || 'info@programmoceuticals.com',
      subject: subject,
      html: htmlContent
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Lead notification email sent:', info.messageId);
      return info;
    } catch (error) {
      console.error('Failed to send lead notification email:', error);
      throw error;
    }
  }
}

module.exports = new EmailService();