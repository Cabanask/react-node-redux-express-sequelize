/**
 * @author : Kevin Cabanas
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  getAllProducts,addProduct,updateProductById,deleteProductById } from '../../actions/apiProducts';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FormAddProduct from './FormAddProduct';
import TableAllProduct from './TableAllProduct';

const ProductManagementController = React.createClass({

  getInitialState:function() {
   
    return {
      name:'',
      description:'',
      quantity:'',
      ean13:'',
      price:0,
      active:true,
      isFetchingGetAllProduct:false,
      allProduct:[],
    }
  },
  componentWillUnmount: function () {
    
  },
  handleRefreshUser: function () {
    this.handlegetAllProduct();  
  },
  handlegetAllProduct: function () {
    this.setState({isFetchingGetAllProduct:true});
    this.props.getAllProducts();
  },
  componentDidMount: function () {
    this.handlegetAllProduct();
  },

  componentWillReceiveProps: function (nextProps) {
    if(this.state.isFetchingGetAllProduct == true && nextProps.apiProducts.isFetchingAllProduct == false) {
      this.setState({allProduct:nextProps.apiProducts.products});
    }
  },

  render() {
    return (
      <div className="container">
      <h1 >CRUD Users</h1>
      <TableAllProduct allProduct={this.state.allProduct}  handleRefreshUser={this.handleRefreshUser.bind(this)}/>
      <FormAddProduct handleRefreshUser={this.handleRefreshUser.bind(this)}/>
      </div>
    );
  }
})

function mapStateToProps(state) {
  
  return {
    apiProducts: state.apiProducts,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
     getAllProducts,
     addProduct,
     updateProductById,
     deleteProductById,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductManagementController);
