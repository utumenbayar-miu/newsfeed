import React, { Component } from "react";

export default class Comment extends Component {
  render() {
    return (
      <div>
        comment: {this.props.comment.comment}, user: {this.props.comment.user}
      </div>
    );
  }
}
