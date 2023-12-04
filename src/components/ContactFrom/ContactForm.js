import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
  render() {
    const { name, number, handleInputChange, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="contact-form">
        <label className="form-input">
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(['-][a-zA-Za-яА-Я]+)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label className="form-input">
          Phone number:
          <input
            type="tel"
            name="number"
            pattern="[+]?[0-9]{1,4}[-.\s]?[(]?[0-9]{1,3}[)]?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" className="button-add">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
