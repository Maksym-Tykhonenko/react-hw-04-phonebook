import React, { useState } from "react";
import { nanoid } from 'nanoid';


export const Form = ({ handleAddContact }) => {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
   

    const handleInputChange = (e) => {
        
        switch (e.currentTarget.name) {
            case 'name':
                setName(e.currentTarget.value.trim());
                break;
            case 'number':
                setNumber(e.currentTarget.value.trim());
                break;

            default:
                break;
        };
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            id: nanoid(),
            name: name,
            number: number
        };
        handleAddContact(newContact);
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
        
    };

        return (
            <>
                <form onSubmit={handleFormSubmit}>
                    <label>Name
                        <input
                            onChange={handleInputChange}
                            value={name}
                            type="text"
                            name="name"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        /></label>
                    <label>Number
                        <input
                            onChange={handleInputChange}
                            type="tel"
                            value={number}
                            name="number"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        /></label>
                    
                    <button >Add contact</button>
                </form>
            </>
        );

};