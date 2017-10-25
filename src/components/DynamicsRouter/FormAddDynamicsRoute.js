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
const FormAddDynamicsRoute = React.createClass({

  getInitialState:function() {
   
    return {
      name:'',
      path:'',
      template_id:0,
      configuration_id:0,
      isFetchingAddRoute:false,
    }
  },
  componentWillUnmount: function () {
    
  },
  handleChangeName: function (e) {
    let name = e.target.value;
    this.setState({name:name})
  },
  handleChangePath: function (e) {
    let path = e.target.value;
    this.setState({path:path})
  },
  handleChangeTemplateId: function (e) {
    let template_id =e.target.value;
    this.setState({template_id:template_id})
  },
  handleChangeConfigurationId: function (e) {
    let configuration_id = e.target.value;
    this.setState({configuration_id:configuration_id})
  },
  handleSubmit: function () {
    let routeAdded = {
      name:this.state.name,
      path:this.state.path,
      template_id:Number(this.state.template_id),
      configuration_id:Number(this.state.configuration_id)
    };
    console.log('routeAdded',routeAdded)
    this.setState({isFetchingAddRoute:true});
    this.props.addDynamicsRoute(routeAdded);
  },
  componentDidMount: function () {
    
  },

  componentWillReceiveProps: function (nextProps) {
    if(this.state.isFetchingAddRoute == true && nextProps.apiDynamicsRouter.isFetchingAddRoute == false) {
      this.setState({isFetchingAddRoute:false});
      if(nextProps.apiDynamicsRouter.error == false) {
        this.props.refreshRoutes();
      }
    }
  },

  render() {
    return (
      <div className="container">
        <div className="Container_Title_Components">
          <h1>Add Dynamics Route</h1>
        </div>
        <Paper className="container_Form_User">  
          <div className="container_Form_User_Left">
            <TextField   
              floatingLabelText={"name"}
              value={this.state.name}
              onChange={this.handleChangeName}
            />
            <TextField  
              floatingLabelText={"path"}
              value={this.state.path}
              onChange={this.handleChangePath}
            />
          </div>  
          <div className="container_Form_User_Right">  
           <TextField  
              floatingLabelText={"template_id"}
              value={this.state.template_id}
              onChange={this.handleChangeTemplateId}
            />
            <TextField  
              floatingLabelText={"configuration_id"}
              value={this.state.configuration_id}
              onChange={this.handleChangeConfigurationId}
            />
          </div> 
          <div className="container_Form_User_Body"> 
            <RaisedButton  label={"submit"} onClick={this.handleSubmit}/>
          </div>
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
     addDynamicsRoute,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(FormAddDynamicsRoute);
