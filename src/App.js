import React, { Component } from 'react';
import Inputs from './Inputs';
import Contacts from './Contacts';

class App extends Component {
  render() {
  	var contacts = [
  		{
	  		name: 'Angela',
	  		phone: 12345
  		},
  		{
	  		name: 'Angela',
	  		phone: 12345
  		},
  		{
	  		name: 'Angela',
	  		phone: 12345
  		}
  	];
    return (
      <div>
      	<Inputs />
      	<Contacts contacts={contacts}/>
      </div>
    );
  }
}

export default App;
