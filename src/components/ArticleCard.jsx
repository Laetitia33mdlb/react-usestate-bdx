import React from 'react';
import { useState } from 'react';
import style from './articlecard.module.css';

const ArticleCard = ({ name, description, image, isFavorite, note }) => {
  const [isFav, setIsFav] = useState(isFavorite);
  const [currentNote, setCurrentNote] = useState(note);
  const [counter, setCounter] = useState(0);

  return (
    <div className={style.card}>
      <h2>{name}</h2>

      <img className={style.image} src={image} alt={name} />
      <p>
        ({currentNote}) {description}
      </p>
      <select
        className={style.select}
        value={currentNote}
        onChange={(e) => setCurrentNote(e.target.value)}
      >
        <option value={0}>0 étoile</option>
        <option value={1}>1 étoile</option>
        <option value={2}>2 étoiles</option>
        <option value={3}>3 étoiles</option>
        <option value={4}>4 étoiles</option>
        <option value={5}>5 étoiles</option>
      </select>
      <button
        className={isFav ? style['button-true'] : style['button-false']}
        onClick={() => setIsFav(!isFav)}
      >
        {isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      </button>
      <div className={style.counterButtons}>
        <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>
          ➖
        </button>
        <span className={style.counter}>{counter}</span>
        <button onClick={() => setCounter(() => counter + 1)}>➕</button>
      </div>
    </div>
  );
};

export default ArticleCard;
