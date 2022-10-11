import React from 'react'

import { LinksComponent } from '../components/LinksComponent'

import { links } from '../assets/links'

export const HomePage = () => {
    return (
        <div id='home-container' className='bg-light shadow rounded'>
            <h1 className='text-warning'>Welcome to Github Searcher App</h1>
            <h5 className='m-2 text-primary'>v1.0.0</h5>
            <p className='m-2 text-primary'>You can search any user or repository information on the next links</p>
            <div className='background-container'>
                <img className='img-background rounded animate__animated animate__backInUp' src={ require('../assets/images/github-background.png') } alt='github-background' />
                <LinksComponent links={ links } />
            </div>
        </div>
    )
}
