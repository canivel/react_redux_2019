import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

export class UserHeader extends Component {
  componentDidMount() {
    return this.props.fetchUser(this.props.userId);
  }
  render() {
    //console.log(this.props.users);

    if (!this.props.user) {
      return null;
    }
    return (
      <div className="header">
        <p>{this.props.user.name}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
