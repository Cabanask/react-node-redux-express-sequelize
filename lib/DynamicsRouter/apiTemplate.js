import express from 'express';
import morgan from'morgan';
import path from'path';
import session from'cookie-session'; // Charge le middleware de sessions
import Sequelize from'sequelize';
import {sequelize,DROP_TABLE_TEMPLATE} from'../configServer';
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



const Template = sequelize.define('Template', {
  name: {
    type: Sequelize.STRING
  },
  configuration_id: {
    type: Sequelize.INTEGER
  },
});

// CREAT TABLE Template force: true will drop the table if it already exists
Template.sync({force: DROP_TABLE_TEMPLATE}).then(() => {
  // Table created
});
export const ADD_TEMPLATE_URL = '/api/template/add';
export const GET_TEMPLATE_URL = '/api/template/all';
export const DEL_TEMPLATE_URL = '/api/template/:id';
export const UPDATE_TEMPLATE_BYID_URL = '/api/template/:id';

export const ADD_TEMPLATE_ACTION = function(req, res){
 
	Template.sync({force: false}).then(() => {
		return Template.create(req.body);
	});
	 res.setHeader('Content-Type', 'application/json');	
	 res = handleError(res,req.method,null,201)
}
export const UPDATE_TEMPLATE_BYID_ACTION = function(req, res){
  if (req.params.id != '') {

    Template.findOne({  
      id: req.params.id,
    })
    Template.findOne({ where: {id:req.params.id} }).then(returnedData => {
      returnedData.updateAttributes(req.body);
    })
    res.setHeader('Content-Type', 'application/json');  
    res = handleError(res,req.method,null,200);
  }  
}
export const GET_TEMPLATE_ACTION =  function(req, res){
	res.setHeader('Content-Type', 'application/json');
	Template.findAll().then(Template => {
	  res.send(JSON.stringify(Template));
	})
}
export const DEL_TEMPLATE_ACTION =  function(req, res, next){
  let response = 'NULL';

  if (req.params.id != '') {
    Template.destroy({ where: { id: req.params.id } })
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

