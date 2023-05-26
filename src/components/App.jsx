import React, { useState, useEffect } from "react";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Form } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { FiltredContactList } from "./FiltredContactList/FiltredContactList";
import { Section } from "./Section/Section";


  

export const App =()=> {

  const [contacts, setContacts] = useState(() =>
    JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  
  const handleAddContact = (newContact) => {
    contacts.find(contact => contact.name === newContact.name) ?
      Notify.failure(`Contact ${newContact.name} already exists`):
    setContacts(contacts => [...contacts, newContact])
  };


  const handleWriteToFilter = (filtredContactName) => {
    setFilter(filtredContactName);
    filtredContacts();
  };

  const filtredContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
    //
  };
  const filterContactsMass = filtredContacts()
  //console.log("filterContactsMass-", filterContactsMass);

  const delContact = (id) => {
    setContacts(contacts =>
      contacts.filter((contact) => contact.id !== id))
  };

  return (
    <div>
      <Section title='Phonebook'>
        <Form handleAddContact={handleAddContact} />
      </Section>

      {contacts.length > 0 && (
        <>
          <Section title='Filter'>
            <Filter searchContact={handleWriteToFilter} />
          </Section>

          {filter === '' ? <Section title='Contacts:'>
            <Contacts
              contacts={contacts}
              delContact={delContact} />
          </Section> : <Section title='Contacts:'>
            <FiltredContactList
              contacts={filterContactsMass}
              delContact={delContact} />
          </Section>}
        </>)}
      
    </div>
  );
};
