// import React, { useRef, useEffect } from "react";

// import PropTypes from 'prop-types'
import React, { Component } from "react";
import Form from "./common/Form";

const Joi = require("joi");

export class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  // schema = Joi.object({
  //   username: Joi.string().required().label("Username"),
  //   password: Joi.string().required().label("Password"),
  // });
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit() {
    console.log("submitted");
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form action="" onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("login")}
        </form>
      </div>
    );
  }
}
export default LoginForm;
