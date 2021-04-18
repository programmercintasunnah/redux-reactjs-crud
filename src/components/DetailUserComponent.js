import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <th width="200">Nama</th>
          <td width="10">:</td>
          <td>{props.getUserDetail.nama}</td>
        </tr>
        <tr>
          <th width="200">Alamat</th>
          <td width="10">:</td>
          <td>{props.getUserDetail.alamat}</td>
        </tr>
        <tr>
          <th width="200">Umur</th>
          <td width="10">:</td>
          <td>{props.getUserDetail.umur}</td>
        </tr>
        <tr>
          <th width="200">No HP</th>
          <td width="10">:</td>
          <td>{props.getUserDetail.nohp}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
