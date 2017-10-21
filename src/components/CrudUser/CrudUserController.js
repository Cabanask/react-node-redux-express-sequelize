/**
 * @author : Kevin Cabanas
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  getAllUsers,addUser,deleteUserById } from '../../actions/apiUsers';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FormAddUser from './formAddUser';
import TableAllUser from './TableAllUser';
const CrudUserController = React.createClass({

  getInitialState:function() {
   
    return {
      lastName:'',
      firstName:'',
      description:'',
      isFetchingGetAllUser:false,
      allUser:[],
    }
  },
  componentWillUnmount: function () {
    
  },
  handleRefreshUser: function () {
    this.handlegetAllUser();  
  },
  handlegetAllUser: function () {
    this.setState({isFetchingGetAllUser:true});
    this.props.getAllUsers();    
  },
  componentDidMount: function () {
    this.handlegetAllUser();
  },

  componentWillReceiveProps: function (nextProps) {
    if(this.state.isFetchingGetAllUser == true && nextProps.apiUsers.isFetchingAllUsers == false) {
      this.setState({isFetchingGetAllUser:false});
      this.setState({allUser: nextProps.apiUsers.users});
    }
  },

  render() {
    return (
      <div className="container">
      <h1 >CRUD Users</h1>
      <TableAllUser allUser={this.state.allUser}  handleRefreshUser={this.handleRefreshUser.bind(this)}/>
      <FormAddUser handleRefreshUser={this.handleRefreshUser.bind(this)}/>
      </div>
    );
  }
})

function mapStateToProps(state) {
  
  return {
    apiUsers: state.apiUsers,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getAllUsers,
      addUser,
      deleteUserById,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(CrudUserController);
