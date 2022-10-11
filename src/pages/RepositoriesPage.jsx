import React, { useState } from 'react'

import { CardComponent } from '../components/CardComponent'
import { LoadingComponent } from '../components/LoadingComponent';
import { NoResultsComponent } from '../components/NoResultsComponent';
import { SearcherBarComponent } from '../components/SearcherBarComponent'

import { useRepos } from '../hooks/useRepos';


export const RepositoriesPage = () => {
  
  const [ userIsLooking, setUserIsLooking ] = useState( false );

  const { repos, isLoading, loadRepos } = useRepos()

  return (
    <div className='main-container shadow bg-light'>
      <h1 className='text-primary'>Github Repositories</h1>
      <div className='row'>
        <div className='col-sm-5'>
          <SearcherBarComponent loadResults={ loadRepos } setUserIsLooking={ setUserIsLooking }/>
        </div>
      </div>
      <div className='row pt-4'>
        <div className='col-sm-12'> 
          {
            ( isLoading && userIsLooking )
                ? <LoadingComponent />
                : (
                  repos.length > 0
                    ? repos.map( ( repo ) => <CardComponent key={ repo.id } repo={ repo } /> )
                    : <NoResultsComponent />
                )
          }
        </div>
      </div>
    </div>
  )
}