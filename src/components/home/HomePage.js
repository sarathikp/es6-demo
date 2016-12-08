import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
	render(){
		return(
			<div calssName="jumbotron">
			<h1> Administration</h1>
			<p> This is demo for es6 React, react router and redux</p> 
			<Link to="About" calssName="btn btn-primary btn-lg"> Click for More</Link>
			</div>);
	}
}
export default HomePage;