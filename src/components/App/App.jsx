import React, { Component } from 'react';
import ContactForm from '../ContactFrom/ContactForm';
import ContactList from '../ContactList/ContactList';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number, contacts } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and number.');
      return;
    }

    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      alert(`Contact with the name "${name}" already exists.`);
      return;
    }

    const newContact = {
      id: `id-${contacts.length + 1}`,
      name: name.trim(),
      number: number.trim(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleFilterChange = e => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { name, number, filter, contacts } = this.state;

    const filteredContacts = contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className="wrapper">
        <h1>Contact Book App</h1>
        <ContactForm
          name={name}
          number={number}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
        <label className="filter">
          Filter by name:
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleFilterChange}
          />
        </label>
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
