var express = require('express');
var app = express();
const nodemailer = require('nodemailer');

app.get('/', function (req, res) {
   res.send('Hello World');
})



app.post('/mail', async (req , res)=>{
   console.log(req.body)
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'umerprogrammer@gmail.com',
          pass: 'kfbwoukjnvdulnek'
      }
  });
  
  console.log('created');
  transporter.sendMail({
  from: 'umerprogrammer@gmail.com',
    to: 'umerprogrammer@gmail.com',
    subject: 'hello world!',
    text: 'hello world!'
  });

})


var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})