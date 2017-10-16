/**
 * @author : Kevin Cabanas
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from "react-router-dom";
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';



const personnageDetails = React.createClass({

  getInitialState:function() {
    let personnageData = null;
    let thumbnail = "";
    if(this.props.personnageData) {
      personnageData = this.props.personnageData;
      thumbnail = personnageData.thumbnail.path + "." + personnageData.thumbnail.extension; 
    }
    return {
      personnageData:personnageData,
      thumbnail:thumbnail,
    }
  },
  componentWillUnmount: function () {
    
  },

  componentDidMount: function () {
 
  },

  componentWillReceiveProps: function (nextProps) {
 
  },

  render() {
    if(this.state.personnageData != null){
      return (
        <div className="container">
          <h1  className="TitleH1">{"Fiche identité :"}</h1>
          <div className="ContainerDetailsLeft">
            <div style={{backgroundImage: 'url(' + this.state.thumbnail + ')',minWidth:"350px",height:"350px",backgroundSize:"cover",backgroundPosition:"top"}}></div>
          </div>
          <div className="ContainerDetailsRight">
              <Paper className="containerPaperName">
                <h1 className="titlePerso">{this.state.personnageData.name}</h1>
              </Paper>
              <div className="container50">
                <label>Commics</label>
                <List>
                   {this.state.personnageData.comics.items.map( (row, index) => (
                    <ListItem primaryText={row.name}  />
                    ))} 
                 </List> 
               </div>
               <div className="container50">
                  <label>Series</label>
                  <List>
                   {this.state.personnageData.series.items.map( (row, index) => (
                    <ListItem primaryText={row.name}  />
                    ))} 
                   </List> 
               </div>
          </div>
        </div>
      );
    } else {
      return (
      <div className="container">
        <h1 className="TitleH1">{"Aucun personnage séléctionné"}</h1>
          <Link onClick={this.handleToggle} to="/"><RaisedButton  label={"Revenir à la liste"}/></Link>
      </div>
    );
   }  
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

export default connect(mapStateToProps, matchDispatchToProps)(personnageDetails);
