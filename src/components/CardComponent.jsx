import React from 'react'

export const CardComponent = ({ user = null }) => {

    const { login: name, type, html_url, avatar_url } = user;

    if ( user ) {
        console.log( user );
    }

    return (
        <>
            {/* // <div className="card text-bg-dark mt-2"> */}
                <div className="card shadow mt-2">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={ avatar_url } className="img-avatar" alt="avatar" /> { name }
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Type: { type }</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href={ html_url } className="btn btn-primary" target='_blank'>Go to github profile</a>
                    
                    </div>
                </div>

        </>
    )
}
