/**
 * @author : Kevin Cabanas
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from "react-router-dom";
import MenuIcone from 'material-ui/svg-icons/navigation/menu';
import {
  ROUTE_HOME,
  ROUTE_CRUD_USER,
} from '../constants/routes';import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllDynamicsRoutes, addDynamicsRoute, deleteDynamicsRouteById } from '../actions/apiDynamicsRouter';

import * as ConstRoute from '../constants/routes';

const MenuDrawer = React.createClass({

  getInitialState:function() {
    return {
      open:false,
      allRoutes:[],
    }
  },
  componentWillUnmount: function () {
    
  },

  componentDidMount: function () {
    this.setState({allRoutes:this.props.apiDynamicsRouter.routes});
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({allRoutes:nextProps.apiDynamicsRouter.routes});
  },
  handleToggle : function (){
    if(this.state.open === false){
     this.setState({open:true}) 
    }else{
      this.setState({open:false}) 
    }
  },

  render() {
    return (
      <div >
        <MenuIcone
          style={{color:"white",cursor:"pointer",width:"45px",height:"45px"}}
          onClick={this.handleToggle}
        />
        <Drawer 
        open={this.state.open}
        docked={false}
        disableSwipeToOpen={false}
        onRequestChange={this.handleToggle}
        >
        {Object.keys(ConstRoute).map( (key, index) => (
          <Link onClick={this.handleToggle} to={ConstRoute[key].path}><MenuItem>{ConstRoute[key].name}</MenuItem></Link>
        ))}
        {this.state.allRoutes.map( (row, index) => (
          <Link onClick={this.handleToggle} to={row.path}><MenuItem>{row.name}</MenuItem></Link>
        ))}
          
        </Drawer>
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
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(MenuDrawer);
