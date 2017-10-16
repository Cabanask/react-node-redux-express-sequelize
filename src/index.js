import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import AppController from './components/appController';
import PersonnageDetails from './components/personnageDetails';
import Header from './components/header';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Test from './tests/tests';

const Footer = () => <div className="containerFooter"><h1>FOOTER</h1></div>;

ReactDOM.render(
	<Router>

		<MuiThemeProvider>
		  	<Provider store={store}>
			    <div>
				    <Header />
				    <Route exact path="/" component={AppController} />
					<Route exact path="/details" component={PersonnageDetails} />
				</div>
		  	</Provider>
	  	</MuiThemeProvider>
  	</Router>,
  document.getElementById('container'),
);
