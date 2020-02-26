var nodemailer= require('nodemailer');

module.exports=function mailerFun(data){
    var transporter = nodemailer.createTransport({
      service: 'gmail',
        auth: {
        user: 'corporate19.pritesh@gmail.com',
        pass: 'preetesh3000'
        }
    });
 
    var mailOptions = {
      from: 'corporate19.pritesh@gmail.com',
      to: data,
      subject: 'Verification OTP Code',
      text: 'This is the OTP CODE for your Password Reset 112233 <test>'
    };
    console.log(mailOptions);
 
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        console.log("errr",error);
      }else{
        console.log('Email sent: ' + info.response);
      }
    })
 }
