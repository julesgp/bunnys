import React from 'react';
var FontAwesome = require('react-fontawesome');

export default class LandingPage extends React.Component{
	render(){
		return(
			<div className="landingPage">
				<div className="header">
					<div className="address">
						<h3>912 Queen Street East, Toronto</h3>
					</div>
					<div className="contact">
						<a href="tel:+16473406439" className="phone"> <h3>(647)340-6439</h3></a>
						<a href="https://www.instagram.com/bunnysrestaurant/"><FontAwesome name="instagram"/></a>
						<a href="mailto:info@somebunnylovesyou"><FontAwesome name="envelope" className="mail"/></a>
					</div>
				</div>{/* end of Header*/}

				<div className="main">
					<div className="bunnysMain">
						<div className="bunnysContent some">SOME</div>
						<div><img src="../../public/images/OK.gif" className="bunnysImg"/></div>
						<div className="bunnysContent">
							<div>LOVES</div>
							<div className="you">YOU</div>
						</div>
					</div>
				</div>{/* end of main*/}
				
				<div className="footer">
					<div className="hours">
						<h3>M-F: 10-10</h3>
						<h3>Sat: 9-10</h3>
						<h3>Sun: 9-9</h3>
					</div>
					<div className="mainMenu">
						<button className="menu">menu</button>
					</div>
				</div>{/* end of footer*/}
			</div>
		)
	}
}