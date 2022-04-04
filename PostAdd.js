import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class PostAdd extends Component {
  state = {
    post: {
      id: "",
      post: "",
      user: "Unubold",
    },
  };

  changed = (event) => {
    const newPost = { ...this.state.post };
    newPost.post = event.target.value;
    this.setState({ post: newPost });
  };

  addPost = () => {
    const newPost = { ...this.state.post };
    newPost.id = uuidv4();
    newPost.isDeleted = 0;
    this.props.addPost(newPost);
  };

  render() {
    return (
      <div>
        <h3>PostAdd</h3>
        <input
          type="text"
          name="post"
          value={this.state.post.post}
          onChange={(event) => this.changed(event)}
        />
        <button onClick={this.addPost}>Add post</button>
      </div>
    );
  }
}
