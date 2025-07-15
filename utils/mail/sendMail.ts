import nodemailer from 'nodemailer';
import { mailUserTemplate } from '../mail/template';
import dotenv from 'dotenv'
dotenv.config()

const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    },
});

async function sendMail(receiver: string, subject: string, html: string) {
    const mailOptions = {
        from: {
            name: process.env.EMAIL_SENDER!,
            address: process.env.EMAIL_ADDRESS!,
        }, 
        to: receiver, 
        subject: subject,
        html: html,
    };

    try {
        const info = await transport.sendMail(mailOptions);
        console.log('Email sent successfully:');
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

export const mailUser = async (email: string, subject: string, message: string) => {
    try {
        const html = mailUserTemplate(message);
        await sendMail(email, subject, html);
    } catch (error) {
        console.error("Error generating email template:", error);
        throw error;
    }
};
