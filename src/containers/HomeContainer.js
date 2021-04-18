import React, { Component } from "react";
import { connect } from "react-redux";
import TableComponent from "../components/TableComponent";
import {
  deleteDataUser,
  deleteUserDetail,
  getUsersList,
} from "../actions/userAction";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteUserDetail());
    this.props.dispatch(deleteDataUser());
  }
  render() {
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}
export default connect(mapStateToProps, null)(HomeContainer);
