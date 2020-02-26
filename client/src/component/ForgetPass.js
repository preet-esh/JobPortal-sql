import React from 'react'
// import './Std.css';
const axios = require('axios')

class ForgetPass extends React.Component {
    constructor() {
        super();    
        this.state = { email:''}
};

   Emailcheck(e) {
    e.preventDefault();
    const userData=document.getElementById('email').value;
    // console.log(userData);  
    axios.post('http://localhost:5000/checkMail/',userData)
   .then(res => {
      console.log(res.data);
      // if(res.data.msg=='1'){
        // alert("OTP send on "+userData);
      //     localStorage.setItem('tempMail',userData);
              // this.setState({email:userData});
      //  //  window.location.assign('/changePass')
      // }
      // else{
      //     alert("wrong Email");
      // }
    })
    .catch((err) =>{
      console.log(err);
    })
  }
  OTPcheck(e) {
    e.preventDefault();
    const userData={
      email:this.state.email,
      otp:document.getElementById('otp').value,
    }
    // console.log(userData);  
    axios.post('http://localhost:5000/checkOTP/',userData)
   .then(res => {
      console.log(res.data);
      // if(res.data.msg=='1'){
      //     localStorage.setItem('tempMail',userData);
              // this.setState({email:userData});
      //  //  window.location.assign('/changePass')
      // }
      // else{
      //     alert("wrong Email");
      // }
    })
    .catch((err) =>{
      console.log(err);
    })
  }
  
    render(){
      if(this.state.email){
        return(
          <div className="login">
            <form className="px-4 py-3" encType="multipart/form-data" onSubmit= {this.OTPcheck}>
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" placeholder={this.state.email} disabled />
            </div>
            <div className="form-group">
              <label>OTP</label>
              <input type="text" className="form-control" placeholder="Enter OTP" name="otp" id="otp" />
            </div>
            <div className="form-group">
            <button className="btn btn-primary btn-lg btn-block" type="submit">Verify OTP</button>
            </div>
            </form>
          </div>
        );
      }
      else{
      return(
        <div className="login">
        <form className="px-4 py-3" encType="multipart/form-data" onSubmit= {this.Emailcheck}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter Email" name="email" id="email" />
            </div>    
            <div className="form-group">
            <button className="btn btn-primary btn-lg btn-block" type="submit">Send OTP</button>
            </div>       
        </form>
      </div>
      );
    }
  }
}
 export default ForgetPass;