import "./style.css";

const Card = ({ cards }) => {
  return (
    <div className="card">
      <div className="card__poligon"></div>
      <div className="card__wrapper">
        <p className="card__title">{cards.title}</p>
        <h2>{cards.name}</h2>
        <p className="card__with">{cards.with}</p>
        <p className="card__dose">{cards.dose}</p>
        <p className="card__present">{cards.present}</p>
        <img className="card__cat" src="./cat.svg" alt=""></img>
        <div className="card__circle">
          <p>{cards.weight}</p>
          <p>кг</p>
        </div>
      </div>
      <div className="card__footer">
        Чего сидишь? Порадуй котэ, <button className="card__link">купи</button>
      </div>
    </div>
  );
};

export default Card;
