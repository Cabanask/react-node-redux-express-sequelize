import express from 'express';
import morgan from'morgan';
import path from'path';
import session from'cookie-session'; // Charge le middleware de sessions
import Sequelize from'sequelize';
import {sequelize,DROP_TABLE_DYNAMICS_ROUTER} from'../configServer';
import {handleError} from'../response';
import bodyParser from 'body-parser'; // Charge le middleware de gestion des paramètres

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });


/*sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });*/



const DynamicsRouter = sequelize.define('DynamicsRouter', {
  name: {
    type: Sequelize.STRING
  },
  path: {
    type: Sequelize.STRING
  },
  template_id: {
    type: Sequelize.INTEGER
  },
  configuration_id: {
    type: Sequelize.INTEGER
  },
  level_admin_id: {
    type: Sequelize.INTEGER
  },
});

// CREAT TABLE DynamicsRouter force: true will drop the table if it already exists
DynamicsRouter.sync({force: DROP_TABLE_DYNAMICS_ROUTER}).then(() => {
  // Table created
});
export const ADD_DYNAMICS_ROUTE_URL = '/api/dynamics-router/add';
export const GET_DYNAMICS_ROUTE_URL = '/api/dynamics-router/all';
export const DEL_DYNAMICS_ROUTE_URL = '/api/dynamics-router/:id';
export const UPDATE_DYNAMICS_ROUTE_URL = '/api/dynamics-router/:id';

export const ADD_DYNAMICS_ROUTE_ACTION = function(req, res){
 
	DynamicsRouter.sync({force: false}).then(() => {
		return DynamicsRouter.create(req.body);
	});
	 res.setHeader('Content-Type', 'application/json');	
	 res = handleError(res,req.method,null,201)
}
export const UPDATE_DYNAMICS_ROUTE_ACTION = function(req, res){
  if (req.params.id != '') {

    DynamicsRouter.findOne({  
      id: req.params.id,
    })
    DynamicsRouter.findOne({ where: {id:req.params.id} }).then(returnedData => {
      returnedData.updateAttributes(req.body);
    })
    res.setHeader('Content-Type', 'application/json');  
    res = handleError(res,req.method,null,200);
  }  
}
export const GET_DYNAMICS_ROUTE_ACTION =  function(req, res){
	res.setHeader('Content-Type', 'application/json');
	DynamicsRouter.findAll().then(DynamicsRouter => {
	  res.send(JSON.stringify(DynamicsRouter));
	})
}
export const DEL_DYNAMICS_ROUTE_ACTION =  function(req, res, next){
  let response = 'NULL';

  if (req.params.id != '') {
    DynamicsRouter.destroy({ where: { id: req.params.id } })
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

