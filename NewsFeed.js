import React, { Component } from "react";
import PostAdd from "./PostAdd";
import PostList from "./PostList";

export default class NewsFeed extends Component {
  state = {
    posts: [
      {
        id: "1",
        post: "post1",
        user: "user1",
        isDeleted: 0,
      },
      {
        id: "2",
        post: "post2",
        user: "user2",
        isDeleted: 1,
      },
      {
        id: "3",
        post: "post3",
        user: "user2",
        isDeleted: 0,
      },
    ],
  };

  addPost = (post) => {
    const newPosts = [...this.state.posts];
    newPosts.push(post);
    this.setState({ posts: newPosts });
  };

  deletePost = (postId) => {
    let index = -1;
    for (let i = 0; i < this.state.posts.length; i++) {
      if (this.state.posts[i].id === postId) {
        index = i;
        break;
      }
    }
    const copy = [...this.state.posts];
    const postToDelete = copy[index];
    postToDelete.isDeleted = 1;
    this.setState({ posts: copy });
  };

  render() {
    return (
      <div>
        <h3>NewsFeed</h3>
        <PostAdd addPost={this.addPost} />
        <PostList deletePost={this.deletePost} posts={this.state.posts} />
      </div>
    );
  }
}
