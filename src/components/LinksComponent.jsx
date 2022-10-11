import React from 'react'
import { NavLink } from 'react-router-dom'

export const LinksComponent = ({ links = [] }) => {
  return (
    <div className='links-container'>
        { 
            links.map( link => (
                <NavLink key={ link.name } to={ link.path }>
                    <p className={ 'text-capitalize badge bg-warning text-wrap animate__animated ' + link.animation }>{ link.name }</p>
                </NavLink>
            )) 
        }
    </div>
  )
}
