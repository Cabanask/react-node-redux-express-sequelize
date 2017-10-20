/**
 * @author : Kevin Cabanas
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  getPersoMarvel, getTodoListNode,deleteTodoListNodeById } from '../actions/apiMarvel';
import {  getAllUsers,addUser } from '../actions/apiUsers';
import CardPersonnage  from './cardPersonnage';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const FormUser = React.createClass({

  getInitialState:function() {
   
    return {
      name:'',
      firstname:'',
    }
  },
  componentWillUnmount: function () {
    
  },
  handleChangeName: function (e,index,value) {
    this.setState({name:e.target.value});
  },
  handleChangeFirstname: function (e,index,value) {
    this.setState({firstname:e.target.value});
  },
  handleSubmit: function () {
    let user = {firstName: this.state.firstname , lastName:this.state.name};
    console.log('user',user)
    this.props.addUser(user)
  },
  componentDidMount: function () {
    
    //this.props.addUser(userAdd);
  },

  componentWillReceiveProps: function (nextProps) {
    
  },

  render() {
    return (
      <div className="container">
        <TextField   
          floatingLabelText={"name"}
          value={this.state.value}
          onChange={this.handleChangeName}
        />
        <TextField  
          floatingLabelText={"firstname"}
          value={this.state.firstname}
          onChange={this.handleChangeFirstname}
        />
        <h1>sdsdds</h1>
        <RaisedButton   label={"submit"} onClick={this.handleSubmit}/>
      </div>
    );
  }
})

function mapStateToProps(state) {
  
  return {
    apiMarvel: state.apiMarvel,
    apiUsers: state.apiUsers,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getPersoMarvel,
      getTodoListNode,
      deleteTodoListNodeById,
      getAllUsers,
      addUser,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(FormUser);
