


export const Filter = ({searchContact}) => {
 

    
    const handleInputSearch = (e) => {
        searchContact(e.target.value.toLowerCase());
    };


        return (
            <>
                <input
                    type="text"
                    onChange={handleInputSearch}
                    placeholder='search' />
            </>
        );
    
    
};