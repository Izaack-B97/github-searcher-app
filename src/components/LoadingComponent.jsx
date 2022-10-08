import React from 'react'

export const LoadingComponent = () => {
    return (
        <div className='loading-container'>
            <img className='loading-img' src={ require('../assets/images/loading-gif.gif') } alt='loading...' />
        </div>
    )
}
