import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { HomePage } from '../pages/HomePage'
import { UsersPage } from '../pages/UsersPage'
import { RepositoriesPage } from '../pages/RepositoriesPage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="home" element={ <HomePage /> } />
        <Route path="users" element={ <UsersPage /> } />
        <Route path="repos" element={ <RepositoriesPage /> } />

        <Route path='/*' element={ <Navigate to='/home' /> } />
    </Routes>
  )
}
