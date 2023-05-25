

export const FiltredContactList = ({ filtredContacts, delContact }) => {
    return (
        <ul>
            {filtredContacts.map(({ id, name, number }) => {
                return (
                    <li key={id} >
                        <p>{name}: {number}</p>
                        <button
                            type='button'
                            onClick={() => delContact(id)} >Dellite</button>
                        
                    </li>
                );
            })}
        </ul>
    )
};