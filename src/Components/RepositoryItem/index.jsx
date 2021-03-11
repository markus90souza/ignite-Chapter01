import React from 'react';

// import { Container } from './styles';

function RepositoryItem(props) {
  return (
    <li className="repository__item">
        <strong>{props.repo.name}</strong>
        <p className="repository__desc">
            {props.repo.description}
        </p>
    <a className="repository__link" href={props.repo.link}>
      acessar Repo
    </a>
    </li>
  );
}

export default RepositoryItem;
