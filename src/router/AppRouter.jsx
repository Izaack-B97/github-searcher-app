import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { RepositoriesPage } from '../pages/RepositoriesPage'
import { UsersPage } from '../pages/UsersPage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="users" element={ <UsersPage /> } />
        <Route path="repos" element={ <RepositoriesPage /> } />

        <Route path='/' element={ <Navigate to='/users' /> } />
    </Routes>
  )
}
