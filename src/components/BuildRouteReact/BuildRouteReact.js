/**
 * @author : Kevin Cabanas
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/*Components*/
import Header from '../header';
import Home from '../home';
import CrudUserController from '../CrudUser/CrudUserController';

/*Constantes*/
import * as ConstRoute from '../../constants/routes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  getAllUsers,addUser,deleteUserById } from '../../actions/apiUsers';
import {getAllDynamicsRoutes} from '../../actions/apiDynamicsRouter';

/*Utils*/
import {getTemplateById} from '../../utils/dynamicsRoutesUtils';




const BuildRouteReact = React.createClass({

  getInitialState:function() {
    let routeMap;
    if(Array.isArray(this.props.apiDynamicsRouter.routes) == true){
      routeMap = 
      this.props.apiDynamicsRouter.routes.map( (row, index) => (
        <Route exact path={row.path} component={getTemplateById(row.template_id)} />
      ));  
    }

    return {
     routesMap:routeMap,
    }
  },
  componentWillUnmount: function () {
    
  },
  handlegetAllRoutes: function () {
    this.props.getAllDynamicsRoutes();
  },
  handlegetAllUser: function () {
   
  },
  componentDidMount: function () {
    this.handlegetAllRoutes();
  },

  componentWillReceiveProps: function (nextProps) {
    if(nextProps.apiDynamicsRouter.routes != this.state.routes) {
      if(Array.isArray(nextProps.apiDynamicsRouter.routes) == true){  
        this.setState({routesMap: 
          nextProps.apiDynamicsRouter.routes.map( (row, index) => (
            <Route exact path={row.path} component={getTemplateById(row.template_id)} />
          ))
        });
      }  
    }
  },

  render() {
    return (
    <Router>
      <MuiThemeProvider>
        <Provider store={this.props.store}>
        <div>
          <Header/>
            {Object.keys(ConstRoute).map( (key, index) => (
              <Route exact path={ConstRoute[key].path} component={ConstRoute[key].components} />
            ))}
             {this.state.routesMap}      
        </div>
        </Provider>
      </MuiThemeProvider>
    </Router>
    );
  }
})

function mapStateToProps(state) {
  
  return {
    apiUsers: state.apiUsers,
    apiDynamicsRouter:state.apiDynamicsRouter,
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

export default connect(mapStateToProps, matchDispatchToProps)(BuildRouteReact);
