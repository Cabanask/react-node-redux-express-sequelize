import express from 'express';
import morgan from'morgan';
import path from'path';
import session from'cookie-session'; // Charge le middleware de sessions
import Sequelize from'sequelize';
import {sequelize,DROP_TABLE_IMAGES} from'../configServer';
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



const Images = sequelize.define('images', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  },
  extension: {
    type: Sequelize.BLOB
  },

});

// CREAT TABLE IMAGES force: true will drop the table if it already exists
Images.sync({force: DROP_TABLE_IMAGES}).then(() => {
  // Table created
});
export const ADD_IMAGES_URL = '/api/images/add';
export const GET_IMAGES_URL = '/api/images/all';
export const DEL_IMAGES_URL = '/api/images/:id';
export const UPDATE_IMAGES_BYID_URL = '/api/images/:id';

export const ADD_IMAGES_ACTION = function(req, res){
 
	Images.sync({force: false}).then(() => {
		return Images.create(req.body);
	});
	 res.setHeader('Content-Type', 'application/json');	
	 res = handleError(res,req.method,null,201)
}
export const UPDATE_IMAGES_BYID_ACTION = function(req, res){
  if (req.params.id != '') {

    Images.findOne({  
      id: req.params.id,
    })
    Images.findOne({ where: {id:req.params.id} }).then(returnedData => {
      returnedData.updateAttributes(req.body);
    })
    res.setHeader('Content-Type', 'application/json');  
    res = handleError(res,req.method,null,200);
  }  
}
export const GET_IMAGES_ACTION =  function(req, res){
	res.setHeader('Content-Type', 'application/json');
	Images.findAll().then(users => {
	  res.send(JSON.stringify(users));
	})
}
export const DEL_IMAGES_ACTION =  function(req, res, next){
  let response = 'NULL';

  if (req.params.id != '') {
    Images.destroy({ where: { id: req.params.id } })
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

