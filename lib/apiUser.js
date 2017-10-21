import express from 'express';
import morgan from'morgan';
import path from'path';
import session from'cookie-session'; // Charge le middleware de sessions
import Sequelize from'sequelize';
import {sequelize,DROP_TABLE_USER} from'./configServer';
import bodyParser from 'body-parser'; // Charge le middleware de gestion des paramètres

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
});

// CREAT TABLE USER force: true will drop the table if it already exists
User.sync({force: DROP_TABLE_USER}).then(() => {
  // Table created
});
export const ADD_USER_URL = '/api/users/add';
export const GET_ALL_USER_URL = '/api/users/all';
export const DEL_USER_BYID_URL = '/api/users/:id';


export const ADD_USER_ACTION = function(req, res){
	User.sync({force: false}).then(() => {
		return User.create(req.body);
	});
	 res.setHeader('Content-Type', 'application/json');	
	 res.send(JSON.stringify(req.body));
}
export const GET_ALL_USER_ACTION =  function(req, res){
	res.setHeader('Content-Type', 'application/json');
	User.findAll().then(users => {
	  res.send(JSON.stringify(users));
	})
}
export const DEL_USER_BYID_ACTION =  function(req, res){
  let response = 'NULL';
  if (req.params.id != '') {
    User.destroy({ where: { id: req.params.id } })
      .then(function(){ 
        
        /*if( JSON.parse(arguments).0 == 1){
          response = "OK"
        }
        if(JSON.parse(arguments).0 == 0){
          response = "KO"
        }*/
      //res.setHeader('Content-Type', 'text/plain');
      //console.log('JSON.stringify(res.respond)',res.status(406).send('Not Acceptable'))
      //res.setHeader('Content-Type', 'application/json');
     // res.send(JSON.stringify(res.respond)); 
      })
      
    }

}

