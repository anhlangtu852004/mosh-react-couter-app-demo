import React, { Component } from "react";
import http from "../services/httpServices";
import config from "../../config.json";

export default class PostsPage extends Component {
  state = {
    posts: [],
  };
  async componentDidMount() {
    const { data: posts } = await http.get(config.apiEndpoint);

    this.setState({ posts });
  }
  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(config.apiEndpoint, obj);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async (post) => {
    post.title = "UPDATE";
    await http.put(config.apiEndpoint + "/" + post.id, post);

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async (post) => {
    const originalPosts = this.state.posts;
    let posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await http.delete("s" + config.apiEndpoint + "/" + post.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("this post has already been deleted");

      this.setState({ posts: originalPosts });
    }
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
                  <button
                    className="btn btn-primary"
                    onClick={() => this.handleUpdate(posts)}
                  >
                    update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(posts)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
