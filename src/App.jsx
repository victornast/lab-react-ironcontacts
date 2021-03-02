import React from 'react';
import contacts from './contacts.json';
import './App.css';

function App() {
  class IronContacts extends React.Component {
    constructor() {
      super();
      this.state = {
        selectedContacts: contacts.slice(0, 5)
      };
    }

    selectRandomContact = () => {
      const newContacts = contacts.filter(
        (contact) => !this.state.selectedContacts.includes(contact)
      );
      let randomIndex = Math.floor(Math.random() * newContacts.length);
      return newContacts[randomIndex];
    };

    addRandomContact = () => {
      const copyContacts = [...this.state.selectedContacts];
      let randomContact = this.selectRandomContact();
      copyContacts.push(randomContact);
      this.setState({ selectedContacts: copyContacts });
    };

    render() {
      return (
        <section>
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.selectedContacts.map((contact) => {
                return (
                  <tr style={{ textAlign: 'left' }} key={contact.id}>
                    <td>
                      <img
                        width="50px"
                        src={contact.pictureUrl}
                        alt={contact.name}
                      />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>IronContacts</h1>
      </header>
      <section>
        <IronContacts />
      </section>
    </div>
  );
}

export default App;
