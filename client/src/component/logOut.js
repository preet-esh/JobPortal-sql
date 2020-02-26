import React from 'react';

const logOut=()=>{
      return(  
          <div>
              {localStorage.clear()}
              {localStorage.setItem("Login_Status",0)}

                  {window.location.assign('/login')}
          </div>
      )
}
export default logOut;
