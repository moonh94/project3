import nodemailer from 'nodemailer';
import Password from '../components/Password'

export default function sendEmail() {
  const mailerConfig = {
    defaults: {
      from: {
        name: 'mathieutu',
        address: 'dev@mathieutu.ovh',
      },
    },
    transport: {
      host: 'smtp.example.com',
      secure: true,
      auth: {
        user: 'username',
        pass: 'password',
      },
    },
  }

  const emailsList = {
    pass: Password,
  }

  const mailer = nodemailer(mailerConfig, emailsList)

  mailer.send('pass', {
    firstName: 'Hanmi',
    lastName: 'Moon',
    brand: 'Bootcamp',
    newAccount: true,
    password: Math.random().toString(36).substring(7),
  }, {
    to: 'foo@bar.fr',
    attachments: [{ content: 'bar', filename: 'foo.txt' }],
  })
}