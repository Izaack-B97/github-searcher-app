import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types';

export const SearcherBarComponent = ({ loadResults, setUserIsLooking }) => {
    
    const [ valueTyped, setValueTyped ] = useState( '' );

    const handleOnChange = ( e ) => {
        const { value : valueToSearch } = e.target;
        setValueTyped( valueToSearch );
    }

    useEffect(() => {
        console.log({ valueTyped });
        let timeout = null;
        if (  valueTyped !== '' ) {
            timeout = setTimeout( () => {
                loadResults( valueTyped )
                setUserIsLooking( false );
            }, 500 );
        }

        return () => {
            if ( timeout ) clearTimeout( timeout );
        }
    }, [ valueTyped ]);
    
    return (
        <div>
            <input 
                type="search" 
                className="form-control" 
                id="inputSearcher" 
                placeholder='Search...' 
                value={ valueTyped }
                onChange={ handleOnChange }
            />
        </div>
    )
}

SearcherBarComponent.propTypes = {
    loadResults: PropTypes.func.isRequired,
    setUserIsLooking: PropTypes.func.isRequired 
}
