import React, { useEffect, useState } from 'react'
import { GithubApi } from '../api/GithubApi';

export const useUsers = () => {
    const [ users, setUsers ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( false );

    const loadUsers = async ( name = '' ) => {
        try {
            
            setIsLoading( true )
            
            const { data } = await GithubApi.get( 'users?q=Izaack-B97' );
            
            setUsers( data.items );
            setIsLoading( false );

        } catch ( err ) {
            console.log( err );
        }
    };

    useEffect(() => {
        loadUsers()
    }, []);


    return { users, isLoading, loadUsers }
}
