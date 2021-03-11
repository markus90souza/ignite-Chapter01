
import { useEffect, useState } from 'react';
import RepositoryItem from '../RepositoryItem';
import './style.scss';
const repo = {
    name: 'Teste',
    description: 'Desc',
    link: 'https://github.com/rocketseat'
}
const Repository = () => {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {

        const loadRepositories = () => {
            fetch('https://api.github.com/orgs/rocketseat/repos')
                .then(response => response.json())
                .then(data => setRepositories(data));
        }

        loadRepositories();

    }, [])

  return (
      <section className="repository__container">
          <header>
              <h1 className="repository__title">Lista de Repostorios</h1>
          </header>

          <ul className="repository__list">
              {
                  repositories.map(repository => (
                    <RepositoryItem
                        key={repository.name}
                        repository={repository}
                    />
                  ))
              }

          </ul>
      </section>
  )
}

export default Repository;
