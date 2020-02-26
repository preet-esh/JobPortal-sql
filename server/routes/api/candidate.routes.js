module.exports =function(app){
  const candidate = require('../../app/controller/candidate/candidate.controller');
  const job_post = require('../../app/controller/employer/job_post.controller');
  const loginC =require('../../app/controller/common/login.controller');
  const registerC=require('../../app/controller/common/register.controller');
  const forget = require('../../app/controller/common/forget');

  app.post('/register',registerC.create);
  app.post('/login',loginC.login);
  
  app.get('/getIndus',registerC.getIndus);
  app.get('/getCatgry',registerC.getCatgry);

  app.post('/verifyMail',forget.verifyMail);
  app.post('/changePass',forget.changePass);
  app.post('/verify',forget.verify);
     
}
