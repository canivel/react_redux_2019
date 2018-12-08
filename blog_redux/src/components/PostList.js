import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";
export class PostList extends Component {
  componentDidMount() {
    return this.props.fetchPost;
  }

  render() {
    return <div>PostList</div>;
  }
}

export default connect(
  null,
  { fetchPost }
)(PostList);
