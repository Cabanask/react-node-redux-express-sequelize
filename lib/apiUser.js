const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('cookie-session'); // Charge le middleware de sessions
const Sequelize = require('sequelize');
const app = express();
const bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres

export const ADD_USER = 
app.post('/api/users/add', function(req, res){
res.setHeader('Content-Type', 'application/json');
User.sync({force: false}).then(() => {
// Table created
return User.create(req.body);
});
  res.send(JSON.stringify(req.body));
});