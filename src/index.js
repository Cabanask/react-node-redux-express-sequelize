import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import store from './store';
/*Components*/
import Header from './components/header';
import Home from './components/home';
import CrudUserController from './components/CrudUser/CrudUserController';
import BuildRouteReact from './components/BuildRouteReact/BuildRouteReact';

/*Constantes*/
import * as ConstRoute from './constants/routes';
/*Other*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


let storeState = store.getState();

ReactDOM.render(
	<BuildRouteReact store={store}/>,
  document.getElementById('container'),
);
