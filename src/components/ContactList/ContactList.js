import React from 'react';
import './ContactList.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <li className="contact-list-item" key={contact.id}>
          <p>Name: {contact.name}</p>
          <p>Phone: {contact.number}</p>
          <button
            className="button-list"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
