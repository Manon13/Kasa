import data from "../../../logements.json";
import "./Card.sass";

// Fonction pour tronquer le titre
function truncateTitle(title) {
  const words = title.split(" ");
  if (words.length > 3) {
    const firstLine = words.slice(0, 3).join(" "); // Prend les 3 premiers mots pour la première ligne
    const secondLine = words.slice(3).join(" "); // Prend le reste des mots pour la deuxième ligne
    return (
      <>
        {firstLine}
        <br />
        {secondLine}
      </>
    );
  }
  return title; // Retourne le titre complet s'il y a moins de 4 mots
}

// Composant Card
function Card() {
  return (
    <div className="card__container">
      {data.map((logement, index) => (
        <div key={index} className="card">
          <img src={logement.cover} alt={logement.title} />
          <h2 className="card__title">{truncateTitle(logement.title)}</h2>
        </div>
      ))}
    </div>
  );
}

export default Card;
