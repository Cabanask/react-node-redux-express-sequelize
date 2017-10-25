import React from 'react';
import Header from '../components/header';
import Home from '../components/home';
import CrudUserController from '../components/CrudUser/CrudUserController';
import DynamicsRouterController from '../components/DynamicsRouter/DynamicsRouterController';
import ProductManagementController from '../components/Product-Management/ProductManagementController';

export const ROUTE_HOME =  {name:"Home",path:'/',components:Home};
export const ROUTE_CRUD_USER = {name:"Gestion Users",path:'/crud-users',components:CrudUserController};
export const ROUTE_CRUD_DYNAMICS_ROUTER = {name:"Gestion routes dynamiques",path:'/dynamics-router',components:DynamicsRouterController};
export const ROUTE_PRODUCT_MANAGEMENT = {name:"Gestion Des Produits",path:'/product-management',components:ProductManagementController};

