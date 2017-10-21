/**
 * @author : Kevin Cabanas
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import MenuDrawer from '../components/menuDrawer';
//import {} from '../constants/link';

const Header = React.createClass({

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
      <div className="containerHeader" >
        <div className="containerDrawer">
        	<MenuDrawer  />
        </div>
        <div className="containerLogoVp">
          
        </div>
      </div>
    );
  }
})



export default Header;
