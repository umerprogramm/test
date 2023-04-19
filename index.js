var express = require('express');
var app = express();
const nodemailer = require('nodemailer');
require("dotenv").config();
const cors = require("cors");
const bodyParser = require('body-parser');


app.use(cors({
   origin : "*"
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
   res.send('Hello World');
})



app.post('/mail', async (req , res)=>{
   console.log(req.body.name)
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'umerprogrammer@gmail.com',
          pass: process.env.Pass
      }
  });
  
  console.log('created');
  transporter.sendMail({
  from: 'umerprogrammer@gmail.com',
    to: 'smjamalaly@gmail.com',
    subject: 'customer info',
    text: `Here is the phone number:${req.body.phone} and here is Name: ${req.body.name}`
  });
res.send('ok')
})


var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
