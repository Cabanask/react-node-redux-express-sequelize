/**
 * @author : Kevin Cabanas
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  getPersoMarvel, getTodoListNode,deleteTodoListNodeById } from '../actions/apiMarvel';
import {  getAllUsers,addUser } from '../actions/apiUsers';
import CardPersonnage  from './cardPersonnage';
import CircularProgress from 'material-ui/CircularProgress';

const listPersonages = React.createClass({

  getInitialState:function() {
    let personnages = [];
    let loading = <CircularProgress size={80} thickness={5} />
    if(this.props.apiMarvel.personageMarvel != null) {
      if(this.props.apiMarvel.personageMarvel && this.props.apiMarvel.personageMarvel.data && this.props.apiMarvel.personageMarvel.data.results) {
        personnages = this.props.apiMarvel.personageMarvel.data.results;
        loading = null;
      }
    }
    return {
      isfetchingPersonages:false,
      personnages:personnages,
      loading:loading,
    }
  },
  componentWillUnmount: function () {
    
  },

  componentDidMount: function () {
    if(this.props.apiMarvel.personageMarvel == null) {
      this.setState({isfetchingPersonages: true});
     // this.props.getPersoMarvel(0)    
    }
    //this.props.deleteTodoListNodeById(0);
    //this.props.getAllUsers();
    let userAdd = {
    firstName: 'Mamie',
    lastName: 'Cabanas',
    }
    //this.props.addUser(userAdd);
  },

  componentWillReceiveProps: function (nextProps) {
    console.log('nextProps',nextProps)
    if(this.state.isfetchingPersonages === true && nextProps.apiMarvel.isFetchingPersonageMarvel === false) {
      this.setState({isfetchingPersonages: false});
      if(nextProps.apiMarvel.personageMarvel && nextProps.apiMarvel.personageMarvel.data && nextProps.apiMarvel.personageMarvel.data.results) {
         this.setState({personnages: nextProps.apiMarvel.personageMarvel.data.results});
         this.setState({loading: null});
      }
    }
  },

  render() {
    return (
      <div className="container">
        <h1 className="container">{"Liste des super héros :"}</h1>
          {this.state.loading}
          {this.state.personnages.map( (row, index) => (
           <CardPersonnage personnage={row}/>
          ))} 
      </div>
    );
  }
})

function mapStateToProps(state) {
  
  return {
    apiMarvel: state.apiMarvel,
    apiUsers: state.apiUsers,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getPersoMarvel,
      getTodoListNode,
      deleteTodoListNodeById,
      getAllUsers,
      addUser,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(listPersonages);
