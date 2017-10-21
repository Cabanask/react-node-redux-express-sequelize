import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import store from './store';
/*Components*/
import Header from './components/header';
import Home from './components/home';
import CrudUserController from './components/CrudUser/CrudUserController';
/*Constantes*/
import {
	ROUTE_HOME,
	ROUTE_CRUD_USER,
} from './constants/routes';
/*Other*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Footer = () => <div className="containerFooter"><h1>FOOTER</h1></div>;

ReactDOM.render(
	<Router>

		<MuiThemeProvider>
		  	<Provider store={store}>
			    <div>
				    <Header />
				    <Route exact path={ROUTE_HOME} component={Home} />
					<Route exact path={ROUTE_CRUD_USER} component={CrudUserController} />
				</div>
		  	</Provider>
	  	</MuiThemeProvider>
  	</Router>,
  document.getElementById('container'),
);
