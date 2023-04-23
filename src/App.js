import React, { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Card, Grid, Progress } from 'semantic-ui-react'
import './App.css';



function App() {
  const [cards, setCards] = useState([]);

  function getCards() {
    fetch('http://localhost:3001/cards')
      .then(r => r.json())
      .then(d => setCards(d))
  }

  useEffect(getCards, [])

  if (!cards) getCards();

  return (
    <div className="App">
      <header className="App-header">
        Study Cards        
      </header>
      <main>
      <Progress total={cards.length} value={4} progress="ratio" indicating size="medium" />
        <Grid doubling columns="4" padded> 
          {cards ? cards.map(card =>
          <Grid.Column key={card.name}>
            <Card key={card.name} centered>
              <Card.Content>
                <Card.Header>
                  {card.name}
                </Card.Header>
                <Card.Description>
                  {card.body}
                </Card.Description>
              </Card.Content>
            </Card>
            </Grid.Column>
            ) : 'no cards yet'}
        </Grid>
      </main>
    </div>
  );
}

export default App;
