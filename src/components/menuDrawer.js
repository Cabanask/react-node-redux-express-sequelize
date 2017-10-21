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
} from '../constants/routes';

const menuDrawer = React.createClass({

  getInitialState:function() {
    return {
      open:false,
    }
  },
  componentWillUnmount: function () {
    
  },

  componentDidMount: function () {
 
  },

  componentWillReceiveProps: function (nextProps) {
 
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
          <Link onClick={this.handleToggle} to={ROUTE_HOME}><MenuItem>Home</MenuItem></Link>
          <Link onClick={this.handleToggle} to={ROUTE_CRUD_USER}><MenuItem>CRUD Users</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
})



export default menuDrawer;
