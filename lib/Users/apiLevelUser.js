import express from 'express';
import morgan from'morgan';
import path from'path';
import session from'cookie-session'; // Charge le middleware de sessions
import Sequelize from'sequelize';
import {sequelize,DROP_TABLE_LEVEL_USER} from'../configServer';
import {handleError} from'../response';
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



export const LevelUser = sequelize.define('level_User', {
  name: {
    type: Sequelize.STRING
  },
});

// CREAT TABLE LevelUser force: true will drop the table if it already exists
LevelUser.sync({force: DROP_TABLE_LEVEL_USER}).then(() => {
  // Table created
  LevelUser.sync({force: true}).then(() => {
    return LevelUser.create({name:'ADMINISTRATOR'});
  });
  LevelUser.sync({force: true}).then(() => {
    return LevelUser.create({name:'USER'});
  });
  LevelUser.sync({force: true}).then(() => {
    return LevelUser.create({name:'VISITOR'});
  });
});
export const ADD_LEVEL_USER_URL = '/api/level-users/add';
export const GET_ALL_LEVEL_USER_URL = '/api/level-users/all';
export const DEL_LEVEL_USER_BYID_URL = '/api/level-users/:id';
export const UPDATE_LEVEL_USER_BYID_URL = '/api/level-users/:id';

export const ADD_LEVEL_USER_ACTION = function(req, res){
 
	LevelUser.sync({force: false}).then(() => {
		return LevelUser.create(req.body);
	});
	 res.setHeader('Content-Type', 'application/json');	
	 res = handleError(res,req.method,null,201)
}
export const UPDATE_LEVEL_USER_BYID_ACTION = function(req, res){
  if (req.params.id != '') {

    LevelUser.findOne({  
      id: req.params.id,
    })
    LevelUser.findOne({ where: {id:req.params.id} }).then(returnedData => {
      returnedData.updateAttributes(req.body);
    })
    res.setHeader('Content-Type', 'application/json');  
    res = handleError(res,req.method,null,200);
  }  
}
export const GET_ALL_LEVEL_USER_ACTION =  function(req, res){
	res.setHeader('Content-Type', 'application/json');
	LevelUser.findAll().then(users => {
	  res.send(JSON.stringify(users));
	})
}
export const DEL_LEVEL_USER_BYID_ACTION =  function(req, res, next){
  let response = 'NULL';

  if (req.params.id != '') {
    LevelUser.destroy({ where: { id: req.params.id } })
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

