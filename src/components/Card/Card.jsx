import data from "../../../logements.json";
import "./Card.sass";

// Composant Card
function Card() {
  return (
    <div className="card__container">
      {data.map((logement, index) => (
        <div key={index} className="card">
          <img src={logement.cover} alt={logement.title} />
          <h2 className="card__title ">{logement.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Card;
