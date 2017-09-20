import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/landingPage.js';
var FontAwesome = require('react-fontawesome');

class App extends React.Component {
    constructor(){
        super();
        this.state={
            displayLandingPage:true,
            displayMenus:false,
        }
        this.openMenu = this.openMenu.bind(this);
    }

    openMenu(){
        this.setState({
            displayLandingPage:false,
            displayMenus:true,
        });
    }

    render(){
    	let displayLanding= "";
    	if(this.state.displayLandingPage === true){
    		displayLanding = (
    			<LandingPage moveToMenu={this.openMenu}/>
    		)
    	}

    	return (
            <div className="mainContainer">
                {displayLanding}
            </div>
    	)
    }
}
ReactDOM.render(<App />, document.getElementById('app'));