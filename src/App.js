import React, { Component } from 'react';
import Contacts from './Contacts';

class App extends Component {

  state = {
    contactsList: []
  }

  onFormSubmit(event) {
    event.preventDefault();

    const contactName = event.target.querySelector('#contactName').value;
    const contactPhone = event.target.querySelector('#contactPhone').value;
    const newContactsList = this.state.contactsList;

    // newContactsList => []
    // this.state.contactsList => []

    newContactsList.push({
      name: contactName,
      phone: contactPhone
    });

    // newContactsList => [{name: 'alenandrp', phone: 123321 }]
    // this.state.contactsList => []

    this.setState({
      contactsList: newContactsList
    });

    // this.state.contactsList => [{name: 'alejandro', phone: 123321 }]
  }

  render() {
    return (
      <div>
        <div className="row">
          <form onSubmit={(event) => this.onFormSubmit(event)}>
            <div className="medium-4 columns"> 
              <input type="text" placeholder="Contact's Name" id="contactName"/>
            </div>
            <div className="medium-4 columns">        
              <input type="text" placeholder="Contact's Phone" id="contactPhone"/>
            </div>     
              <div className="medium-4 columns">
              <button type="submit" className="success button">Add Contact</button>
            </div>
          </form>
        </div>
        <Contacts contacts={this.state.contactsList}/>
      </div>
    );
  }
}

export default App;
