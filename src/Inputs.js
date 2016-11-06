import React, { Component } from 'react';

class Inputs extends Component {
  render() {
    return (
    <div className="row">
		<div className="medium-4 columns"> 
			<input type="text" placeholder="Contact's Name" aria-describedby="exampleHelpText" />
		</div>
		<div className="medium-4 columns"> 		
			<input type="text" placeholder="Contact's Phone" aria-describedby="exampleHelpText" />			
		</div>	 
		<div className="medium-4 columns">
			<button type="button" className="success button">Add Contact</button>
		</div>
	</div>	
  );
  }
}
export default Inputs;