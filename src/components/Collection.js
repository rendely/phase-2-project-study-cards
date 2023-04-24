import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Grid } from 'semantic-ui-react'
import { useParams, Link } from 'react-router-dom'
import Layout from './Layout'

function Collection() {
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

  return (
    <Layout collectionName={collectionName}>
      <Container>
        <Grid columns={numColumns} >
          {cards.map(card =>
            <Grid.Column key={card.id}>
              <Card fluid >
                <Card.Content textAlign='center' style={{ backgroundColor: "lightgray" }}>
                  {card.question}
                </Card.Content>
                <Card.Content textAlign='center'>
                  {card.answer}
                </Card.Content>
              </Card>
            </Grid.Column>
          )}
        </Grid>
      </Container>
      <Container textAlign='center' style={{ padding: "40px" }}>
        <Link to='./add'>
        <Button color='green'>Add Card</Button>
        </Link>
      </Container>
    </Layout>)
}

export default Collection

