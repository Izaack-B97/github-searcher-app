import React, { useEffect } from 'react'
import { GithubApi } from '../api/GithubApi';
import { CardComponent } from '../components/CardComponent'
import { SearcherBarComponent } from '../components/SearcherBarComponent'
import { useUsers } from '../hooks/useUsers';

export const UsersPage = () => {
  
  const { users, isLoading } = useUsers();
  
  console.log( users );

  return (
    <>
      <h1 className='text-primary'>Github Users</h1>
      <div className='row'>
        <div className='col-sm-5'>
          <SearcherBarComponent />
        </div>
      </div>
      <div className='row pt-4'>
        <div className='col-sm-12'>
          {
            [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map( item => <CardComponent key={ item } /> )
          }
        </div>
      </div>
    </>
  )
}
