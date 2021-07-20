import React, { useState, useRef, useEffect } from "react";
import deckOfCards from "./deck_of_cards.json";
import { CardList } from "./components";
import { sort } from './functions';

const App = () => {
  const initialPack = JSON.parse(JSON.stringify(deckOfCards));
  const [pack, setPack] = useState(initialPack);
  const [hand, setHand] = useState([]);
  const numberDrawEl = useRef(null);

  const shuffle = () => {
    setPack([...pack.sort(() => Math.random() - 0.5)]);
  };

  const save = () => {
    localStorage.setItem('cardState', JSON.stringify({ pack: pack, hand: hand}));
  };

  const reset = () => {
    setPack(initialPack);
    setHand([]);
    numberDrawEl.current.value = "";
  };

  const sortHand = () => {
    setHand([
      ...sort(hand),
    ]);
  };

  const draw = () => {
    const numberToTake = numberDrawEl.current.value;
    if (numberToTake) {
      setHand(pack.slice(0, numberToTake));
      setPack(pack.slice(numberToTake));
    }
  };

  useEffect(()=> {
    const cardState = JSON.parse(localStorage.getItem('cardState'));
    if(cardState && cardState.pack && cardState.hand) {
      setPack(cardState.pack);
      setHand(cardState.hand);
    }
  },[]);

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1 className="header">iX Cards Test</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Deck</h3>
        </div>
        <div className="col">
          <h3>Controls</h3>
        </div>
        <div className="col">
          <h3>Hand</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Save game</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button onClick={shuffle}>Shuffle </button>
        </div>
        <div className="col">
          <button onClick={save}>Save </button>
          <button onClick={reset}>Reset </button>
        </div>
        <div className="col">
          <button onClick={sortHand}>Sort </button>
        </div>
      </div>
      <div className="row">
        <div className="col">{pack && <CardList cards={pack} />}</div>
        <div className="col">
          <input
            type="number"
            name="drawCards"
            ref={numberDrawEl}
            size="10"
            max="52"
            min="1"
          />
          <br />
          <button onClick={draw}>Draw</button>
        </div>
        <div className="col">{hand && <CardList cards={hand} />}</div>
      </div>
      <div className="row"></div>
      <div className="row">
        <div className="col"></div>
      </div>
    </div>
  );
};

export default App;
