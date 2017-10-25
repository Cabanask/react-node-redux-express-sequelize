/**
 * @author : Kevin Cabanas
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllDynamicsRoutes, addDynamicsRoute, deleteDynamicsRouteById } from '../../actions/apiDynamicsRouter';

const TemplateArticleController = React.createClass({

  getInitialState:function() {
   
    return {
      title:'Template Article',
      subtitle:'SubTitle',
      configuration_Id: 0,
    }
  },
  componentWillUnmount: function () {
    
  },
  handleSubmit: function () {
   
  },
  handleChangeRoute: function () {
    
  },
  handlegetAllRoutes: function () {

  },
  componentDidMount: function () {
  
  },

  componentWillReceiveProps: function (nextProps) {

  },

  render() {
    return (
      <div className="container">
        <h1>{this.state.title}</h1>
          <h2>{this.state.subtitle}</h2>
          <article>
            {"ICI L'ARTCILES...."}
          </article>
      </div>
    );
  }
})

function mapStateToProps(state) {
  
  return {
    apiDynamicsRouter: state.apiDynamicsRouter,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getAllDynamicsRoutes,
      addDynamicsRoute,
      deleteDynamicsRouteById,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(TemplateArticleController);
