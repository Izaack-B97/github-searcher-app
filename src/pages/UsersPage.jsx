import React, { useState } from 'react'

import { CardComponent } from '../components/CardComponent'
import { LoadingComponent } from '../components/LoadingComponent';
import { NoResultsComponent } from '../components/NoResultsComponent';
import { SearcherBarComponent } from '../components/SearcherBarComponent'

import { useUsers } from '../hooks/useUsers';

export const UsersPage = () => {
  
  const [ userIsLooking, setUserIsLooking ] = useState( false );

  const { users, isLoading, loadUsers } = useUsers();

  return (
    <div className='main-container shadow bg-light'>
      <h1 className='text-primary'>Github Users</h1>
      <div className='row'>
        <div className='col-sm-5'>
          <SearcherBarComponent loadResults={ loadUsers } setUserIsLooking={ setUserIsLooking }/>
        </div>
      </div>
      <div className='row pt-4'>
        <div className='col-sm-12'> 
          {
            ( isLoading && userIsLooking )
                ? <LoadingComponent />
                : (
                  users.length > 0
                    ? users.map( ( user ) => <CardComponent key={ user.login + user.id } user={ user } /> )
                    : <NoResultsComponent />
                )
          }
        </div>
      </div>
    </div>
  )
}