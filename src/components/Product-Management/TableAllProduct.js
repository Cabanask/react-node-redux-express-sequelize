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
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';


const TableAllProducts = React.createClass({

  getInitialState:function() {
   
    return {
      isFetchingGetAllProduct:false,
      allProduct:[],
    }
  },
  componentWillUnmount: function () {
    
  },
  handleDeleteUser: function (id) {
     this.props.deleteProductById(id)
     this.props.handleRefreshProduct();

  },
  componentDidMount: function () {
    
  },

  componentWillReceiveProps: function (nextProps) {
    if(nextProps.allProduct) {
      this.setState({allProduct:nextProps.allProduct})  
    }
  },

  render() {
    return (
      <div className="container">
        <div className="Container_Title_Components">
          <h1>TableAllUser</h1>
        </div>
        <Paper className="Container_Table_User">
          <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Active</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Ean13</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
              <TableHeaderColumn>Quantity</TableHeaderColumn>
              <TableHeaderColumn>Action</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
              {this.state.allProduct.map( (row, index) => (
                <TableRow >
                  <TableRowColumn>{row.id}</TableRowColumn>
                  <TableRowColumn>{String(row.active)}</TableRowColumn>
                  <TableRowColumn>{row.name}</TableRowColumn>
                  <TableRowColumn>{row.description}</TableRowColumn>
                  <TableRowColumn>{row.ean13}</TableRowColumn>
                  <TableRowColumn>{row.price}</TableRowColumn>
                  <TableRowColumn>{row.quantity}</TableRowColumn>
                  <TableRowColumn><RaisedButton   label={"Supprimer"} onClick={this.handleDeleteUser.bind(this,row.id)}/></TableRowColumn>
                </TableRow> 
              ))}     
          </TableBody>
        </Table>
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
       deleteProductById,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(TableAllProducts);
