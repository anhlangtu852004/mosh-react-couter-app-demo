// import React, { useRef, useEffect } from "react";

// import PropTypes from 'prop-types'
import React, { Component } from "react";
import Input from "./common/Input";

export class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.username.trim() === "")
      errors.username = "Username is required...~";
    if (account.password.trim() === "")
      errors.password = "Password is required...~";

    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;
    console.log("submitted");
  };

  validateProperty = (input) => {
    if (input.name === "username") {
      if (input.value.trim() === "") return "Username is require";
    }
    if (input.name === "password") {
      if (input.value.trim() === "") return "Password is require";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({
      account,
      errors,
    });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form action="" onSubmit={this.handleSubmit}>
          {/* name, label, value, onChange */}
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />

          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
