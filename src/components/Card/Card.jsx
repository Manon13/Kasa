import data from '../../../logements.json';
import './Card.scss';

function Card() {
  const truncateTitle = (title) => {
    const words = title.split(' ');
    if (words.length > 3) {
      const firstLine = words.slice(0, 3).join(' '); // Prend les trois premiers mots pour la première ligne
      const secondLine = words.slice(3).join(' '); // Prend le reste des mots pour la deuxième ligne
      return (
        <>
          {firstLine}
          <br />
          {secondLine}
        </>
      );
    }
    return title; // Retourne le titre complet s'il y a moins de 4 mots
  };

  return (
    <div className="card-container">
      {data.map((logement, index) => (
        <div key={index} className="card">
          <img src={logement.cover} alt={logement.title} />
          <h2 className="card-title">{truncateTitle(logement.title)}</h2>
        </div>
      ))}
    </div>
  );
}

export default Card;