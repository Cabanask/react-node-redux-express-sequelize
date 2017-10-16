/**
 * @author : Kevin Cabanas
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import ListPersonages from '../components/listPersonages';
import FormUser from '../components/formUser';


const Home = React.createClass({

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

  render() {
    return (
      <div className="container"> 
        <FormUser />
        <ListPersonages />
      </div>    
    );
  }
})



export default Home;
