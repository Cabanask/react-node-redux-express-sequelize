/**
 * @author : Kevin Cabanas
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setDataPersonnage } from '../actions/apiMarvel';
import {Link} from "react-router-dom";
import {Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import WikiIcone from 'material-ui/svg-icons/av/library-books';
import DetailsIcone from 'material-ui/svg-icons/action/fingerprint';
import ComlinkIcone from 'material-ui/svg-icons/action/add-shopping-cart';
import FicheIcone from 'material-ui/svg-icons/action/account-box';

const cardPersonnage = React.createClass({

  getInitialState:function() {
    let name = "";
    let description = "";
    let thumbNailUrl = "";
    let urlLinks = [];
    let id = 0;
    let personnage = {}
    if(this.props.personnage) {
      personnage = this.props.personnage;
      name = personnage.name;
      description = personnage.description;
      thumbNailUrl = personnage.thumbnail.path + "." + personnage.thumbnail.extension;
      urlLinks = personnage.urls;
      id = personnage.id;
    }
    return {
      personnage:personnage,
      name:name,
      description:description,
      thumbNailUrl:thumbNailUrl,
      urlLinks:urlLinks,
      id:id,
    }
  },
  componentWillUnmount: function () {
    
  },

  componentDidMount: function () {
    
  },

  componentWillReceiveProps: function (nextProps) {
    
  },
  getIconeByTypet: function (row) {
    let icone  = <DetailsIcone />
    if(row.type === "detail") {
      icone  = <DetailsIcone />
    }
    if(row.type === "wiki") {
      icone  = <WikiIcone />
    }
    if(row.type === "comiclink") {
      icone  = <ComlinkIcone />
    }  
    return icone;
  },
  setIdPersonnage: function () {
   this.props.setDataPersonnage(this.state.personnage)
  },

  render() {
    return (
		<div className="containerIlineFlex30" >
			<Card style={{width:"100%"}}>
				<CardMedia>
					<div  style={{backgroundImage: 'url(' + this.state.thumbNailUrl + ')',minWidth:"350px",height:"350px",backgroundSize:"cover",backgroundPosition:"top"}}></div>
				</CardMedia>
				<CardTitle title={this.state.name}  />
				<CardActions className="containerCardButton"  >
					{this.state.urlLinks.map( (row, index) => (
						<a target="_blank" className="linkButton" href={row.url}><RaisedButton  icon={this.getIconeByTypet(row)}  label={row.type}/></a>
					))} 
					<Link onClick={this.setIdPersonnage}  to={"/details"}><RaisedButton  icon={<FicheIcone/>}  label={"Fiche du personnage"}/></Link> 
				</CardActions>
			</Card>
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
      setDataPersonnage,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(cardPersonnage);
