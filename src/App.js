import React, {useState} from 'react';
import './App.css';


function App() {
  const [cards, setCards] = useState(undefined);

  async function getCards(){
    const response = await fetch('http://localhost:3001/cards');
    const data = await response.json();
    setCards(data);
  }
  
  if (!cards) getCards();

  return (
    <div className="App">
      <header className="App-header">
        Study Cards
      </header>
      <main>
        <div>
       {cards ? cards.map(card => <div key={card.name}>{card.name}</div>) : 'no cards yet'}
        </div>
      </main>
    </div>
  );
}

export default App;
