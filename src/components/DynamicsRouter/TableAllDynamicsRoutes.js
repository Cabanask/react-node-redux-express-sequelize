/**
 * @author : Kevin Cabanas
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllDynamicsRoutes, addDynamicsRoute, deleteDynamicsRouteById } from '../../actions/apiDynamicsRouter';
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


const TableAllDynamicsRoutes = React.createClass({

  getInitialState:function() {
   
    return {
      isFetchingDelRoutes:false,
      allRoutes:[],
    }
  },
  componentWillUnmount: function () {
    
  },
  handleDeleteUser: function (id) {
    this.setState({isFetchingDelRoutes:true});
    this.props.deleteDynamicsRouteById(id);
  },
  componentDidMount: function () {
    
  },

  componentWillReceiveProps: function (nextProps) {
    if(nextProps.allRoutes) {
      this.setState({allRoutes:nextProps.allRoutes})  
    }
    if(this.state.isFetchingDelRoutes == true && nextProps.apiDynamicsRouter.isFetchingDelRoute == false) {
      this.setState({isFetchingDelRoutes:false});
      this.props.refreshRoutes();
    }
  },

  render() {
    return (
      <div className="container">
        <div className="Container_Title_Components">
          <h1>Table all dynamics Routes</h1>
        </div>
        <Paper className="Container_Table_User">
          <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Path</TableHeaderColumn>
              <TableHeaderColumn>Template_ID</TableHeaderColumn>
              <TableHeaderColumn>Configration_ID</TableHeaderColumn>
              <TableHeaderColumn>Action</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
              {this.state.allRoutes.map( (row, index) => (
                <TableRow >
                  <TableRowColumn>{row.id}</TableRowColumn>
                  <TableRowColumn>{row.name}</TableRowColumn>
                  <TableRowColumn>{row.path}</TableRowColumn>
                  <TableRowColumn>{row.template_id}</TableRowColumn>
                  <TableRowColumn>{row.configuration_id}</TableRowColumn>
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
    apiDynamicsRouter: state.apiDynamicsRouter,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getAllDynamicsRoutes,
      addDynamicsRoute,
      deleteDynamicsRouteById,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(TableAllDynamicsRoutes);
