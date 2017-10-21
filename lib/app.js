import express from 'express';
import morgan from'morgan';
import path from'path';
import session from'cookie-session'; // Charge le middleware de sessions
import Sequelize from'sequelize';
import {sequelize} from'./configServer';
const app = express();
import bodyParser from 'body-parser'; // Charge le middleware de gestion des paramètres
import {
  ADD_USER_URL,
  ADD_USER_ACTION,
  GET_ALL_USER_URL,
  GET_ALL_USER_ACTION,
  DEL_USER_BYID_URL,
  DEL_USER_BYID_ACTION,
} from './apiUser';
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
/* Gestion des routes en-dessous */


/*USERS*/
app.get(GET_ALL_USER_URL,GET_ALL_USER_ACTION)
app.post(ADD_USER_URL,ADD_USER_ACTION);
app.get(DEL_USER_BYID_URL,DEL_USER_BYID_ACTION);


// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
module.exports = app;