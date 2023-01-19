import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card/card";
import { cards } from "./data";

function App() {
  const [cardstate, setCards] = useState([]);

  useEffect(() => {
    setCards(cards);
  }, []);

  return (
    <main className="App">
      <div className="app__wrapper">
        <h1>Ты сегодня покормил кота?</h1>
        <div className="cards__wrapper">
          {cardstate.map((item) => (
            <Card key={item.id} cards={{ ...item }} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
