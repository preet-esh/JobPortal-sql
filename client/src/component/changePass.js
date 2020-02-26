import React, { Component } from 'react';
const axios = require('axios');

class changePass extends Component {
  constructor(props){
    super(props);
    this.state={email:'',password:''}
  }
  componentDidMount(){
    // this.setState({Email:localStorage.getItem('TempMail')})
    // console.log(this.state.email);
  }

  Mysubmit=(e)=>{
    e.preventDefault();
    if(this.checkPass()){
      const userData={
        email:this.state.email,
        password: document.getElementById('pass1').value
      }
      console.log(userData);
      axios.post('http://localhost:5000/changePass',userData)
      .then(res => {
         console.log(res.data);   
       })
       .catch((err) =>{
         console.log(err);
       })  
    }
  }    
  
  checkPass=()=>{
    let p1=document.getElementById('pass1').value;
    let p2=document.getElementById('pass2').value;
    // console.log(p1,p2);
    if(p1===p2){
      document.getElementById('passErr').innerHTML="";
      return true;
    }
    else{
      document.getElementById('passErr').innerHTML="Password Not Match!!!!";
      return false;
    } 
  }
    render() {
        return (   
          <div className="login">
          <form className="px-4 py-3" encType="multipart/form-data"  onSubmit={this.Mysubmit}>
              <div className="form-group">
                  <label>New Password</label>
                    <input type="password" className="form-control" placeholder="Enter New Password" id="pass1" required/>
                </div>
              <div className="form-group">
                  <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter Confirm Password" id="pass2" required/>
                    <span id="passErr" style={{color:"red"}}></span>
                  </div>
                <div className="form-group">        
                    <button className="btn btn-success">Change Password</button>
                  </div>
              </form>
              </div>
        )
    }
  }
  export default changePass;