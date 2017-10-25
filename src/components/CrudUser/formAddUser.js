/**
 * @author : Kevin Cabanas
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  getAllUsers,addUser,deleteUserById,changeRoute,updateUserById } from '../../actions/apiUsers';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
const FormAddUser = React.createClass({

  getInitialState:function() {
   
    return {
      userId:null,
      lastName:'',
      firstName:'',
      description:'',
      isFetchingGetAllUser:false,
      allUser:[],
    }
  },
  componentWillUnmount: function () {
    
  },
  handleChangeName: function (e,index,value) {
    this.setState({lastName:e.target.value});
  },
  handleChangeUserId: function (e,index,value) {
    this.setState({userId:e.target.value});
  },
  handleChangeFirstname: function (e,index,value) {
    this.setState({firstName:e.target.value});
  },
  handleChangeDescription: function (e,index,value) {
    this.setState({description:e.target.value});
  },
  handleSubmit: function () {
    let user = {firstName: this.state.firstName , lastName:this.state.lastName,description:this.state.description};
    this.setState({isFetchingAddUser:true});
    this.props.addUser(user);
  },
  handleUpdateUser: function () {
    let user = {id:Number(this.state.userId),firstName: this.state.firstName , lastName:this.state.lastName,description:this.state.description};
    this.props.updateUserById(user,this.state.userId);
  },
  handlegetAllUser: function () {
    this.setState({isFetchingGetAllUser:true});
    this.props.getAllUsers();    
  },
  componentDidMount: function () {
    //this.props.addUser(userAdd);
  },

  componentWillReceiveProps: function (nextProps) {
    if(this.state.isFetchingAddUser == true  && nextProps.apiUsers.isFetchingAddUser == false) {
      this.setState({isFetchingAddUser:false});
      this.props.handleRefreshUser();
    }
  },

  render() {
    return (
      <div className="container">
        <div className="Container_Title_Components">
          <h1>Add User</h1>
        </div>
        <Paper className="container_Form_User">  
          <div className="container_Form_User_Left">
            <TextField   
              floatingLabelText={"LastName"}
              value={this.state.lastName}
              onChange={this.handleChangeName}
            />
            <TextField  
              floatingLabelText={"FirstName"}
              value={this.state.firstName}
              onChange={this.handleChangeFirstname}
            />
          </div>  
          <div className="container_Form_User_Right">  
           <TextField  
              floatingLabelText={"Description"}
              value={this.state.description}
              onChange={this.handleChangeDescription}
            />
            <TextField   
              floatingLabelText={"ID FOR PUT"}
              value={this.state.userId}
              onChange={this.handleChangeUserId}
            />
          </div> 
          <div className="container_Form_User_Body"> 
            <RaisedButton  label={"submit"} onClick={this.handleSubmit}/>
            <RaisedButton  label={"Mettre à jour"} onClick={this.handleUpdateUser}/>
          </div>
        </Paper>
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
      changeRoute,
      updateUserById,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(FormAddUser);
