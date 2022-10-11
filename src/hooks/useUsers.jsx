import { useState } from 'react'
import { GithubApi } from '../api/GithubApi';

export const useUsers = () => {
    const [ users, setUsers ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    const loadUsers = async ( name = '', limit = 10 ) => {
        // console.log({ name });
        try {
            
            setIsLoading( true )
            
            const { data } = await GithubApi.get( `users?q=${ name }&per_page=${ limit }` );
            
            setUsers( data.items );
            setIsLoading( false );

        } catch ( err ) {
            console.log( err );
        }
    };

    return { users, isLoading, loadUsers }
}
