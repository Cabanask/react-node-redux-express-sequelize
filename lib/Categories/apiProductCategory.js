import express from 'express';
import morgan from'morgan';
import path from'path';
import session from'cookie-session'; // Charge le middleware de sessions
import Sequelize from'sequelize';
import {sequelize,DROP_TABLE_PRODUCT_CATEGORY} from'../configServer';
import {handleError} from'../response';
import bodyParser from 'body-parser'; // Charge le middleware de gestion des paramètres
import {Product} from '../Products/apiProduct'
import {CategoriesProduct} from '../Categories/apiCategoriesProduct'
const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });


export const ProductCategory = sequelize.define('product_category', {
  id_product: {
    type: Sequelize.UUID,
    primaryKey: true
  },
  id_category: {
    type: Sequelize.INTEGER,
  },
  position: {
    type: Sequelize.INTEGER
  },
});

// CREAT TABLE product_category force: true will drop the table if it already exists
ProductCategory.sync({force: DROP_TABLE_PRODUCT_CATEGORY}).then(() => {
  // Table created
  ProductCategory.sync({force: true}).then(() => {
    ProductCategory.create({id_product:1,id_category:1,position:1});
  });
});

/******JOINTURES*******/
console.log('JOINTURE ===========================>>>>>>>>>>>>>>>')



