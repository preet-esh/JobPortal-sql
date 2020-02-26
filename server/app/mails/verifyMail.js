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
        subject: 'Email Id Verification Link',
        html: '<h4>Verify YOur Email</h4><p>click on following link : <a href="http://localhost:5000/verify/'+data+'">Verify Link</a>'
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