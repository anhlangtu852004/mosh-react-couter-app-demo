import React, { Component } from "react";

export class Like extends Component {
  render() {
    let classes = "fa-heart fa";
    this.props.liked ? (classes += "s") : (classes += "r");

    return (
      <>
        <i className={classes} onClick={this.props.onClick} > </i>
      </>
    );
  }
}

export default Like;
