import React, { Component } from "react";
import Comment from "./Comment";

export default class PostItem extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    // const comments = await fetchComments(this.props.post.id);
    console.log("Fetched comments");
    const comments = [
      { id: "commentId1", comment: "comment", user: "commentor1" },
      { id: "commentId12", comment: "comment 1", user: "commentor1" },
      { id: "commentId13", comment: "comment 2 ", user: "commentor1" },
    ];
    this.setState({ comments });
  }

  deletePost = () => {
    this.props.deletePost(this.props.post.id);
  };

  render() {
    const { id, post, user } = this.props.post;
    return (
      <div>
        id: {id}, post: {post}, user: {user}
        <p>Comments</p>
        {this.state.comments.map((comment) => (
          <Comment comment={comment} />
        ))}
        <button onClick={this.deletePost}>Delete</button>
      </div>
    );
  }
}
