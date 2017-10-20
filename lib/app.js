import express from 'express';
import morgan from'morgan';
import path from'path';
import session from'cookie-session'; // Charge le middleware de sessions
import Sequelize from'sequelize';
const app = express();
import bodyParser from 'body-parser'; // Charge le middleware de gestion des paramètres
//const {ADD_USER} = require('./apiUsers'); 
import {ADD_USER} from './apiUser';
const urlencodedParser = bodyParser.urlencoded({ extended: false });
/* On utilise les sessions */
//app.use(session({secret: 'todotopsecret'}))


/*Connexion Sequelize BDD*/
const sequelize = new Sequelize('nodepro', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',//|'sqlite'|'postgres'|'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: 'path/to/database.sqlite'
});

// Or you can simply use a connection uri
//const sequelize = new Sequelize('postgres://user:root:3306/nodepro');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  /*Creation d'une table en BDD*/
const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
User.sync({force: false}).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

/*Recherche de Data en Bdd*/

User.findAll().then(users => {
  console.log(users)
})

User.findOne().then(user => {
  console.log(user.get('firstName'));
});
// Setup logger
//app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
/* Gestion des routes en-dessous */

/*Get all user*/
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/api/users/all', function(req, res) { 
	res.setHeader('Content-Type', 'application/json');
	User.findAll().then(users => {
  		res.send(JSON.stringify(users));
	})
    
})

/*Creat User*/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/api/users/add', function(req, res){
	res.setHeader('Content-Type', 'application/json');
  User.sync({force: false}).then(() => {
  // Table created
  return User.create(req.body);
  });
	res.send(JSON.stringify(req.body));
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
module.exports = app;