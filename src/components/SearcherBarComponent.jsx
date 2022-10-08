import React from 'react'

import PropTypes from 'prop-types';

export const SearcherBarComponent = ({ loadUsers, setUserIsLooking }) => {
    
    const handleOnChange = ( e ) => {
        const { value : valueToSearch } = e.target;

        if ( valueToSearch.length > 0 ) {
            setUserIsLooking( true );

            setTimeout( () => {
                loadUsers( valueToSearch )
                setUserIsLooking( false );
            }, 1000 );
        } else {
            setUserIsLooking( false );
        }
    }
    
    return (
        <div>
            <input 
                type="search" 
                className="form-control" 
                id="inputSearcher" 
                placeholder='Search...' 
                onChange={ handleOnChange }
            />
        </div>
    )
}

SearcherBarComponent.propTypes = {
    loadUsers: PropTypes.func.isRequired,
    setUserIsLooking: PropTypes.func.isRequired 
}
