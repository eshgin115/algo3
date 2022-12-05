import React, { Component } from "react";

class UserLogin extends Component {
  render() {
    let Validate = (event) => {
      if (event.target.id == "e-mail") {
        console.log("Доступны только .ru домены");
      } else if (event.target.id == "password") {
        console.log("От 8 символов");
      }
    };
    return (
      <div className="login">
        <center>
          <h2>User Login</h2>
          <p>E-Mail: </p>
          <input id="e-mail" type="email" onFocus={Validate} />
          <p>Password: </p>
          <input id="password" onFocus={Validate} type="password" />
          <button>Login</button>
        </center>
      </div>
    );
  }
}

export default UserLogin;
