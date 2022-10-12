import { useState } from "react"
import { GithubApi } from "../api/GithubApi";

// Custom hook to load the repositories
export const useRepos = () => {
    
    const [ repos, setRepos ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( false );

    const loadRepos = async ( repo_name = 'IsaacBustamante_Pokedex', limit = 10 ) => {
        try {
            setIsLoading( true )
            const { data } = await GithubApi.get( `search/repositories?q=${ repo_name }&per_page=${ limit }` )
            setRepos( data.items );
            setIsLoading( false );

        } catch ( err ) {
            console.log( err );
        }
    }

    return { repos, isLoading, loadRepos}
}
