import React, { Component } from "react";

class Counter extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h4>title # {this.props.id}</h4>
        <span className={this.getBadgeClass()}> {this.formatCount()}</span>
        <button
          className="btn btn-secondary"
          onClick={() => this.props.onIncrease(this.props.counter)}
        >
          increase
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {/* {this.renderTags()}
        {this.state.tags.length === 0 && "please create a new tag"} */}
      </div>
    );
  }
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>there is no tag</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  formatCount() {
    const { value } = this.props.counter;
    return value > 0 ? value : "Zero";
  }
  getBadgeClass() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
