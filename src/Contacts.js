import React, { Component } from 'react';

class Contacts extends Component {
  render() {
  	var contactsList = this.props.contacts.map(contact => <li>{contact.name} {contact.phone}</li>);
    return (
	    <div className="row">
	    	<div className="medium-4 medium-offset-4">
				<ul>
					{contactsList}
				</ul>
			</div>
	    </div>
    );
  }
}

export default Contacts;