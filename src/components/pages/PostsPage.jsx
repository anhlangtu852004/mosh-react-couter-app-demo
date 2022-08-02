import React, { Component } from "react";
import axios from "axios";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

export default class PostsPage extends Component {
  state = {
    posts: [],
  };
  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);

    this.setState({ posts });
  }
  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await axios.post(apiEndpoint, obj);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  render() {
    return (
      <>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts) => (
              <tr key={posts.id}>
                <td>{posts.title}</td>
                <td>
                  <button className="btn btn-primary" onClick={this.handleAdd}>
                    update
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
