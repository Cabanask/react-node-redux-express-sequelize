/**
 * @author : Kevin Cabanas
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListPersonages  from './listPersonages';
import FormUser from '../components/formUser';

const AppController = React.createClass({

  getInitialState:function() {
    return {

    }
  },
  componentWillUnmount: function () {
    
  },

  componentDidMount: function () {
    
  },

  componentWillReceiveProps: function (nextProps) {
  },

  /* <ListPersonages/>*/
  render() {
    return (
      <div className="containerIlineFlex100"> 
       <ListPersonages/>
        <FormUser/>
      </div>
    );
  }
})

function mapStateToProps(state) {
  
  return state.apiMarvel;
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(AppController);
