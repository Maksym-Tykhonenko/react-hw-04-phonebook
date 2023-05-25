import React, { useState, useEffect } from "react";

//import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Form } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
//import { Filter } from "./Filter/Filter";
//import { FiltredContactList } from "./FiltredContactList/FiltredContactList";
import { Section } from "./Section/Section";


  

export const App =()=> {

  const [contacts, setContacts] = useState(() =>
    JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  

  //const [filter, useFilter] = useState([]);

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
   }, [contacts])
  const handleAddContact = (newContact) => {
    
    setContacts(contacts => [...contacts, newContact])
  };

  

  return (
    <div>
      <Section title='Phonebook'>
        <Form  handleAddContact={handleAddContact}/>
      </Section>
      <Section>
        <Contacts contacts={contacts } />
    </Section>
   
    </div>
  );
};
