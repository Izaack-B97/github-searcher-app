import { useState } from 'react'
import { GithubApi } from '../api/GithubApi';

// Custom Hook to load the users results
export const useUsers = () => {
    const [ users, setUsers ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( false );

    const loadUsers = async ( name = '', limit = 10 ) => {
        // console.log({ name });
        try {
            
            setIsLoading( true )
            
            const { data } = await GithubApi.get( `search/users?q=${ name }&per_page=${ limit }` );

            setUsers( data.items );
            setIsLoading( false );

        } catch ( err ) {
            console.log( err );
        }
    };

    const loadUserDetails = async ( username = '' ) => {
        try {
            const { data } = await GithubApi.get( `users/${ username }` );
            return data;
        } catch ( err ) {
            console.log( err );
        }
    }

    return { users, isLoading, loadUsers, loadUserDetails }
}
