import React from 'react';
import ReactDOM from 'react-dom';
import HeaderMenu from './components/HeaderMenu.js';


class App extends React.Component {
    constructor(){
        super();
        this.state={
            displayHeaderMenu:true,
        }
    }
    render(){
    	let displayHeader= "";
    	if(this.state.displayHeaderMenu === true){
    		displayHeader = (
    			<HeaderMenu />
    		)
    	}
    	return (
            <div>
                {displayHeader}
            </div>
    	)
    }
}
ReactDOM.render(<App />, document.getElementById('app'));