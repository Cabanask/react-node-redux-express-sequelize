import express from 'express';
import morgan from'morgan';
import path from'path';
import session from'cookie-session'; // Charge le middleware de sessions
import Sequelize from'sequelize';
import {sequelize,DROP_TABLE_PRODUCT} from'../configServer';
import {ProductCategory} from '../Categories/apiProductCategory'

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



export const Product = sequelize.define('product', {
  active: {
    type: Sequelize.BOOLEAN
  },
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  ean13: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL
  },
  quantity: {
    type: Sequelize.DECIMAL
  },
  categories : {
    type: Sequelize.INTEGER,
  }
});
// CREAT TABLE IMAGES force: true will drop the table if it already exists
Product.sync({force: DROP_TABLE_PRODUCT}).then(() => {
  // Table created
  Product.sync({force: DROP_TABLE_PRODUCT}).then(() => {
    /*Verifie si la table est vide il crée 1 produit sinon rien*/
    Product.findAll().then(returnedData => {
      if(returnedData.length == 0) {
        Product.create({id:1,active:true,name:'Iphone 6',description:"iphone 6 16BG",ean13:'',price:685,quantity:20}); 
        Product.create({id:2,active:true,name:'Ipad Mini',description:"Ipad Mini 32BG",ean13:'',price:685,quantity:20}); 
      }
     })
  });
});


/******JOINTURES*******/


export const ADD_PRODUCT_URL = '/api/product/add';
export const GET_PRODUCT_URL = '/api/product/all';
export const DEL_PRODUCT_URL = '/api/product/:id';
export const UPDATE_PRODUCT_BYID_URL = '/api/product/:id';

export const ADD_PRODUCT_ACTION = function(req, res){
 
  Product.sync({force: false}).then(() => {
    return Product.create(req.body);
  });
   res.setHeader('Content-Type', 'application/json'); 
   res = handleError(res,req.method,null,201)
}
export const UPDATE_PRODUCT_BYID_ACTION = function(req, res){
  if (req.params.id != '') {

    Product.findOne({  
      id: req.params.id,
    })
    Product.findOne({ where: {id:req.params.id} }).then(returnedData => {
      returnedData.updateAttributes(req.body);
    })
    res.setHeader('Content-Type', 'application/json');  
    res = handleError(res,req.method,null,200);
  }  
}
export const GET_PRODUCT_ACTION =  function(req, res){
  res.setHeader('Content-Type', 'application/json');
  Product.findAll().then(users => {
    res.send(JSON.stringify(users));
  })
}
export const DEL_PRODUCT_ACTION =  function(req, res, next){
  let response = 'NULL';

  if (req.params.id != '') {
    Product.destroy({ where: { id: req.params.id } })
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

