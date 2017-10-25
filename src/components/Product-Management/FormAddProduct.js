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
import Paper from 'material-ui/Paper';
const FormAddUser = React.createClass({

  getInitialState:function() {
   
    return {
      name:'',
      description:'',
      quantity:'',
      ean13:'',
      price:0,
      active:true,
      productId:0,
      isFetchingGetAllProduct:false,
    }
  },
  componentWillUnmount: function () {
    
  },
  handleChangeName: function (e,index,value) {
    this.setState({name:e.target.value});
  },
  handleChangeDescription: function (e,index,value) {
    this.setState({description:e.target.value});
  },
  handleChangeQuantity: function (e,index,value) {
    this.setState({quantity:e.target.value});
  },
  handleChangeEan13: function (e,index,value) {
    this.setState({ean13:e.target.value});
  },
  handleChangePrice: function (e,index,value) {
    this.setState({price:e.target.value});
  },


  handleSubmit: function () {
    let product = {
      name: this.state.name,
      description:this.state.description,
      quantity:Number(this.state.quantity),
      ean13:this.state.ean13,
      price:this.state.price,
    };
    this.setState({isFetchingAddProduct:true});
    this.props.addProduct(product);
  },
  handleUpdate: function () {
    let product = {
      id:Number(this.state.productId),
      name: this.state.name,
      description:this.state.description,
      quantity:Number(this.state.quantity),
      ean13:this.state.ean13,
      price:Number(this.state.price),
    };
    this.props.updateProductById(product,this.state.productId);
  },
  handleChangeId: function (e,index,value) {
    this.setState({productId:e.target.value}); 
  },
  componentDidMount: function () {
    
  },

  componentWillReceiveProps: function (nextProps) {
   
  },

  render() {
    return (
      <div className="container">
        <div className="Container_Title_Components">
          <h1>Add Product</h1>
        </div>
        <Paper className="container_Form_User">  
          <div className="container_Form_User_Left">
            <TextField   
              floatingLabelText={"name"}
              value={this.state.name}
              onChange={this.handleChangeName}
            />
            <TextField  
              floatingLabelText={"Description"}
              value={this.state.description}
              onChange={this.handleChangeDescription}
            />
            <TextField  
              floatingLabelText={"quantity"}
              value={this.state.quantity}
              onChange={this.handleChangeQuantity}
            />
          </div>  
          <div className="container_Form_User_Right">  
            <TextField  
              floatingLabelText={"EAN13"}
              value={this.state.ean13}
              onChange={this.handleChangeEan13}
            />
            <TextField  
              floatingLabelText={"Price"}
              value={this.state.price}
              onChange={this.handleChangePrice}
            />
            <TextField   
              floatingLabelText={"ID FOR PUT"}
              value={this.state.userId}
              onChange={this.handleChangeId}
            />
          </div> 
          <div className="container_Form_User_Body"> 
            <RaisedButton  label={"submit"} onClick={this.handleSubmit}/>
            <RaisedButton  label={"Mettre à jour"} onClick={this.handleUpdate}/>
          </div>
        </Paper>
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
      deleteProductById
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(FormAddUser);
