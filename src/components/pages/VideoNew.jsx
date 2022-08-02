import React, { Component } from "react";
import Form from "../common/Form";

const Joi = require("joi");

export default class VideoNew extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      numberInStock: "",
      rate: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().min(0).required().label("Number in Stock"),
    rate: Joi.number().precision(2).min(0).max(10).required().label("Rate"),
  };

  doSubmit() {
    console.log("submitted");
  }

  render() {
    return (
      <div>
        <h2>Movie Form</h2>
        <form action="" onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}

          {this.renderInputSelect("genre", "Genre", [
            { value: "value1", label: "label1" },
            { value: "value2", label: "label2" },
          ])}

          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("rate", "Rate")}

          {this.renderButton("login")}
        </form>
      </div>
    );
  }
}
