import express from 'express';
import morgan from'morgan';
import path from'path';
import session from'cookie-session'; // Charge le middleware de sessions
import Sequelize from'sequelize';
import {sequelize,DROP_TABLE_CATEGORIES_PRODUCT} from'../configServer';
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



export const CategoriesProduct = sequelize.define('category_product', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
});

// CREAT TABLE IMAGES force: true will drop the table if it already exists
CategoriesProduct.sync({force: DROP_TABLE_CATEGORIES_PRODUCT}).then(() => {
  // Table created
  CategoriesProduct.sync({force: true}).then(() => {
    CategoriesProduct.create({name:'Téléphones',description:"Liste de téléhpones"});
    CategoriesProduct.create({name:'Tablettes',description:"Liste des Tablettes"});
  });
});
export const ADD_CATEGORIES_PRODUCT_URL = '/api/product-categories/add';
export const GET_CATEGORIES_PRODUCT_URL = '/api/product-categories/all';
export const DEL_CATEGORIES_PRODUCT_URL = '/api/product-categories/:id';
export const UPDATE_CATEGORIES_PRODUCT_BYID_URL = '/api/product-categories/:id';

export const ADD_CATEGORIES_PRODUCT_ACTION = function(req, res){
 
	CategoriesProduct.sync({force: false}).then(() => {
		return CategoriesProduct.create(req.body);
	});
	 res.setHeader('Content-Type', 'application/json');	
	 res = handleError(res,req.method,null,201)
}
export const UPDATE_CATEGORIES_PRODUCT_BYID_ACTION = function(req, res){
  if (req.params.id != '') {

    CategoriesProduct.findOne({  
      id: req.params.id,
    })
    CategoriesProduct.findOne({ where: {id:req.params.id} }).then(returnedData => {
      returnedData.updateAttributes(req.body);
    })
    res.setHeader('Content-Type', 'application/json');  
    res = handleError(res,req.method,null,200);
  }  
}
export const GET_CATEGORIES_PRODUCT_ACTION =  function(req, res){
	res.setHeader('Content-Type', 'application/json');
	CategoriesProduct.findAll().then(users => {
	  res.send(JSON.stringify(users));
	})
}
export const DEL_CATEGORIES_PRODUCT_ACTION =  function(req, res, next){
  let response = 'NULL';

  if (req.params.id != '') {
    CategoriesProduct.destroy({ where: { id: req.params.id } })
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

