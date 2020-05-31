import React from 'react';
import PropTypes from 'prop-types';
import Repo from '../repos/Repos'


const  RepoItem = ({repo}) => {
    return <div className="card" >
        <h3>
            <a href={repo.html_url} > {repo.name} </a>
        </h3>
    </div>
}

RepoItem.propTypes={
    repos:PropTypes.array
}

export default RepoItem

