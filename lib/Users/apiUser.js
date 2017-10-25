import express from 'express';
import morgan from'morgan';
import path from'path';
import session from'cookie-session'; // Charge le middleware de sessions
import Sequelize from'sequelize';
import {sequelize,DROP_TABLE_USER} from'../configServer';
import {handleError} from'../response';
import {LevelUser} from'../Users/apiLevelUser';
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
  id: {
    type:Sequelize.UUID,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  level_user_id: {
    type: Sequelize.INTEGER
  }
});


//User.hasMany(LevelUser);

// CREAT TABLE USER force: true will drop the table if it already exists
User.sync({force: DROP_TABLE_USER}).then(() => {
  // Table created
});
export const ADD_USER_URL = '/api/users/add';
export const GET_ALL_USER_URL = '/api/users/all';
export const DEL_USER_BYID_URL = '/api/users/:id';
export const UPDATE_USER_BYID_URL = '/api/users/:id';

export const ADD_USER_ACTION = function(req, res){
 
	User.sync({force: false}).then(() => {
		return User.create(req.body);
	});
	 res.setHeader('Content-Type', 'application/json');	
	 res = handleError(res,req.method,null,201)
}
export const UPDATE_USER_BYID_ACTION = function(req, res){
  if (req.params.id != '') {

    User.findOne({  
      id: req.params.id,
    })
    User.findOne({ where: {id:req.params.id} }).then(returnedData => {
      returnedData.updateAttributes(req.body);
    })
    res.setHeader('Content-Type', 'application/json');  
    res = handleError(res,req.method,null,200);
  }  
}
export const GET_ALL_USER_ACTION =  function(req, res){
	res.setHeader('Content-Type', 'application/json');
  
	User.findAll().then(users => {
	  res.send(JSON.stringify(users));
	})
}
export const DEL_USER_BYID_ACTION =  function(req, res, next){
  let response = 'NULL';

  if (req.params.id != '') {
    User.destroy({ where: { id: req.params.id } })
      .then(function(item){ 
        res.setHeader('Content-Type', 'application/json');
        if( item == 1){
          res = handleError(res,req.method,null,200)
        }
        if(item == 0){
          res = handleError(res,req.method,"id Not Found ",500)
        }
      })
      
    }

}

