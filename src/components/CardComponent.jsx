import React from 'react'
import { formatDate } from '../helpers/formatDate';

export const CardComponent = ({ user = null, repo = null }) => {

    // const { login: name, type, html_url, avatar_url } = user;

    if ( repo ) {
        console.log( repo );
    }

    return (
        <>
            <div className="card shadow mt-2 animate__animated animate__fadeIn">
                <div className="card-body">
                    <h5 className="card-title">
                        {user && <img src={ user.avatar_url } className="img-avatar" alt="avatar" />}
                        { user ? user.login : repo.full_name }
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted"> { user ? 'Type:' + user.type : 'Clone URL: ' + repo.clone_url }</h6>
                    { repo && <p className="card-text text-primary">
                        { 
                            'Created at ' + formatDate( repo.created_at ) + ' - ' +
                            'Forks #' + repo.forks + ' - ' +
                            'Default branch #' + repo.default_branch + ' - ' + 
                            'Visibility: ' + repo.visibility + ' - ' + 
                            'Description: ' + repo.description
                            
                        } 
                    </p>}
                    <a href={ user ? user.html_url : repo.html_url } className="btn btn-primary" target='_blank'>{
                        user ? 'Go to github profile' : 'Go to repository'
                    }</a>
                </div>
            </div>
        </>
    )
}
