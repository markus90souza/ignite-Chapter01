
import RepositoryItem from '../RepositoryItem';
import './style.scss';
const repo = {
    name: 'Teste',
    description: 'Desc',
    link: 'https://github.com/rocketseat'
}
const Repository = () => {



  return (
      <section className="repository__container">
          <header>
              <h1 className="repository__title">Lista de Repostorios</h1>
          </header>

          <ul className="repository__list">
            <RepositoryItem
                repository={repo}
            />
          </ul>
      </section>
  )
}

export default Repository;
