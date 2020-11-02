const express = require('express');
const path = require('path');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

const publicPath = path.join(__dirname,'build');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

var transport = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    /* user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD */
    /*  xoauth2: xoauth2.createXOAuth2Generator({ */
    type: "OAuth2",
    user: 'stephentsim096@gmail.com',
    clientId: '744124340808-r3h7qhigh60nal9iel0oec43va24fo66.apps.googleusercontent.com',
    clientSecret: 'rTh5p7yj0AqnxGRSevqyoQML',
    refreshToken: '1//04DrvHHXx08tZCgYIARAAGAQSNgF-L9Ird9QXGTYUDjyp5Xr2n3VJqnxdbhVhLmVP7cJrl9J_pRpAm6hvgosPqxUpF6CGJy2bJw',
    accessToken: 'ya29.a0AfH6SMA3KdliQEVPiek-Rr3ksnUJCvnR3FE08143pTM1_zTb6u7hatrNj69g8HsU4wGKAdWsX_oiwHwmJLanrN2NO9cCtSAJwfBCMqMpYRgEt0t24cesANaDI3BvldzmQyjicuKj7rIFzDrS99ApTl56PKDI7z6rM7M'
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/ajax/send', (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: name,
    to: 'stephentsim096@gmail.com', 
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })
})


app.use(cors())
app.use(express.json())
app.use(router)
app.listen(5000)