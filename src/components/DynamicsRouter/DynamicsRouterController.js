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
import Paper from 'material-ui/Paper';
import TableAllDynamicsRoutes from './TableAllDynamicsRoutes';
import FormAddDynamicsRoute from './FormAddDynamicsRoute';
const DynamicsRouterController = React.createClass({

  getInitialState:function() {
   
    return {
        isFetchingGetAllRoutes:false,
        dynamicsRoutes:[],
    }
  },
  componentWillUnmount: function () {
    
  },
  handleSubmit: function () {
   
  },
  handleChangeRoute: function () {
    
  },
  handlegetAllRoutes: function () {
    this.setState({isFetchingGetAllRoutes:true});
    this.props.getAllDynamicsRoutes();
  },
  componentDidMount: function () {
   this.handlegetAllRoutes();
  },

  componentWillReceiveProps: function (nextProps) {
    if(this.state.isFetchingGetAllRoutes == true && nextProps.apiDynamicsRouter.isFetchingGetAllRoute == false) {
      this.setState({isFetchingGetAllRoutes:false});
      if(nextProps.apiDynamicsRouter.error == false) {
        this.setState({dynamicsRoutes:nextProps.apiDynamicsRouter.routes});
      }  
    }
  },

  render() {
    return (
      <div className="container">
        <h1>Dynamics Router</h1>
        <TableAllDynamicsRoutes allRoutes={this.state.dynamicsRoutes} refreshRoutes={this.handlegetAllRoutes.bind(this)} />
        <FormAddDynamicsRoute refreshRoutes={this.handlegetAllRoutes.bind(this)}/>
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

export default connect(mapStateToProps, matchDispatchToProps)(DynamicsRouterController);
