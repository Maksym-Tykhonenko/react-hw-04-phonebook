

export const FiltredContactList = ({ contacts, delContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => {
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