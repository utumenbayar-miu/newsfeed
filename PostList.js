import React, { Component } from "react";
import PostItem from "./PostItem";

export default class PostList extends Component {
  render() {
    return (
      <div>
        PostList
        {this.props.posts
          .filter((post) => post.isDeleted === 0)
          .map((post) => (
            <PostItem deletePost={this.props.deletePost} post={post} />
          ))}
      </div>
    );
  }
}
