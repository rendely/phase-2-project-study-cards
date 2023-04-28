import React, { useEffect, useState } from 'react'
import { Container, Grid, Input } from 'semantic-ui-react'
import Layout from './Layout'
import StudyCard from './StudyCard'

function Search() {
  const [search, setSearch] = useState('');
  const [cards, setCards] = useState([]);
  const numColumns = Math.floor(window.innerWidth / 300);
  useEffect(getCards, [search]);

  function getCards() {
    fetch('http://localhost:3001/cards?q=' + search)
      .then(r => r.json())
      .then(cards => setCards(cards))
  }

  function handleUpdateCard(updatedCard) {
    setCards(cards => cards.map(c => c.id === updatedCard.id ? updatedCard : c));
  }

  return (
    <Layout>
      <Container style={{ marginBottom: '10px' }}>
        Search: <Input name='search' value={search} onChange={(e) => setSearch(e.target.value)} />
      </Container>
      <Container>
        <Grid columns={numColumns} >
          {cards.map(card =>
            <Grid.Column key={card.id}>
              <StudyCard card={card} onUpdateCard={handleUpdateCard} />
            </Grid.Column>
          )}
        </Grid>
      </Container>
    </Layout>
  )
}

export default Search

