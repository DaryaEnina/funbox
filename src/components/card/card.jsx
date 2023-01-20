import { useEffect } from "react";
import { useState, useCallback } from "react";
import "./style.css";

const Card = ({ cards }) => {
  const [selected, setSelected] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const onSelected = useCallback(() => {
    selected ? setSelected(false) : setSelected(true);
  }, [selected]);

  useEffect(() => {
    cards.count === "0" ? setDisabled(true) : setDisabled(false);
  }, [cards.count]);
  return (
    <div className="card" onClick={onSelected}>
      <div
        className={
          disabled
            ? "card__poligon-disabled"
            : selected
            ? "card__poligon-selected"
            : "card__poligon"
        }
      ></div>
      <div
        className={
          disabled
            ? "card__wrapper-disabled"
            : selected
            ? "card__wrapper-selected"
            : "card__wrapper"
        }
      >
        <div
          id="overlay"
          style={disabled ? { display: "block" } : { display: "none" }}
        ></div>
        <p className="card__title">{cards.title}</p>
        <h2>{cards.name}</h2>
        <p className="card__with">{cards.with}</p>
        <p className="card__dose">{cards.dose}</p>
        <p className="card__present">{cards.present}</p>
        <img className="card__cat" src="./cat.svg" alt=""></img>
        <div
          className={
            disabled
              ? "card__circle-desabled"
              : selected
              ? "card__circle-selected"
              : "card__circle"
          }
        >
          <p>{cards.weight}</p>
          <p>кг</p>
        </div>
      </div>
      {disabled ? (
        <div className="card__footer-disabled">
          Печалька, с {cards.with} закончился.
        </div>
      ) : selected ? (
        <div className="card__footer">{cards.footer}</div>
      ) : (
        <div className="card__footer">
          Чего сидишь? Порадуй котэ,{" "}
          <button
            onClick={onSelected}
            className={selected ? "card__link-selected" : "card__link"}
          >
            купи
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
