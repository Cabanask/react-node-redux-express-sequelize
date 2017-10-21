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
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';


const TableAllUser = React.createClass({

  getInitialState:function() {
   
    return {
      isFetchingGetAllUser:false,
      allUser:[],
    }
  },
  componentWillUnmount: function () {
    
  },
  handleDeleteUser: function (userId) {
     this.props.deleteUserById(userId);
     this.props.handleRefreshUser();

  },
  componentDidMount: function () {
    
  },

  componentWillReceiveProps: function (nextProps) {
    if(nextProps.allUser) {
      this.setState({allUser:nextProps.allUser})  
    }
  },

  render() {
    return (
      <div className="container">
        <div className="Container_Title_Components">
          <h1>TableAllUser</h1>
        </div>
        <Paper className="Container_Table_User">
          <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>LastName</TableHeaderColumn>
              <TableHeaderColumn>FirstName</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Action</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
              {this.state.allUser.map( (row, index) => (
                <TableRow >
                  <TableRowColumn>{row.id}</TableRowColumn>
                  <TableRowColumn>{row.lastName}</TableRowColumn>
                  <TableRowColumn>{row.firstName}</TableRowColumn>
                  <TableRowColumn>{row.description}</TableRowColumn>
                  <TableRowColumn><RaisedButton   label={"Supprimer"} onClick={this.handleDeleteUser.bind(this,row.id)}/></TableRowColumn>
                </TableRow> 
              ))}     
          </TableBody>
        </Table>
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
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(TableAllUser);
