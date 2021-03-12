type RepositoryItemProps = {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}


const RepositoryItem = (props: RepositoryItemProps) => {
  return (
    <li className="repository__item">
        <strong>{props.repository.name}</strong>
        <p className="repository__desc">
            {props.repository.description}
        </p>
        <a  className="repository__link"
            target="_blank"
            href={props.repository.html_url}>
        Acessar Repositorio
        </a>
    </li>
  );
}

export default RepositoryItem;
