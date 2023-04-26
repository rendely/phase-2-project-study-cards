import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Grid } from 'semantic-ui-react'
import { useParams, Link } from 'react-router-dom'
import Layout from './Layout'
import CardForm from './CardForm'

function CollectionDetail() {
  const params = useParams();
  const numColumns = Math.floor(window.innerWidth / 300);

  const [cards, setCards] = useState([]);
  const [collectionName, setCollectionName] = useState('');

  useEffect(getCards, []);
  useEffect(getCollectionInfo, []);

  function getCards() {
    fetch('http://localhost:3001/cards?collectionId=' + params.id)
      .then(r => r.json())
      .then(cards => setCards(cards))
  }
  function getCollectionInfo() {
    fetch('http://localhost:3001/collections?id=' + params.id)
      .then(r => r.json())
      .then(collections => setCollectionName(collections[0].name))
  }

  function handleAddCard(newCard) {
    const formData = { ...newCard, collectionId: params.id };
    fetch('http://localhost:3001/cards', {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(newCard => setCards(cards => [...cards, newCard]))
  }

  return (
    <Layout collectionName={collectionName}>
      <Container>
        <Grid columns={numColumns} >
          {cards.map(card =>
            <Grid.Column key={card.id}>
              {/* TODO: break into own component  */}
              <Card fluid style={{ height: "100%" }}>
                <Card.Content style={{ backgroundColor: "lightgray" }}>
                  {card.question}
                </Card.Content>
                <Card.Content>
                  {card.answer}
                </Card.Content>
              </Card>
            </Grid.Column>
          )}

        </Grid>
        <Grid centered columns={4} doubling>
          <Grid.Column>
            <Card fluid style={{ height: "100%" }}>
              <Card.Content>
                <CardForm onAddCard={handleAddCard} />
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>

      </Container>
    </Layout>)
}

export default CollectionDetail

