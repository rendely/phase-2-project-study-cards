import React, { useEffect, useState } from 'react'
import { Card, Container, Grid } from 'semantic-ui-react'
import { useParams} from 'react-router-dom'
import Layout from './Layout'

function Collection() {
  const params = useParams();
  console.log(params.id);

  const [cards, setCards] = useState([]);
  const [collectionName, setCollectionName] = useState('');

  useEffect(getCards, []);
  useEffect(getCollectionInfo, []);

  function getCards() {
    fetch('http://localhost:3001/cards?collectionId='+params.id)
      .then(r => r.json())
      .then(cards => setCards(cards))
  }
  function getCollectionInfo(){
    fetch('http://localhost:3001/collections?id='+params.id)
    .then(r => r.json())
    .then(collections => setCollectionName(collections[0].name))
  }

  return (
    <Layout collectionName={collectionName}>
    <Grid columns={4} doubling>
      {cards.map(card =>
        <Grid.Column key={card.id}>
          <Card fluid >
            <Card.Content textAlign={'center'}>
              {card.question}
            </Card.Content>
            <Card.Content textAlign={'center'}>
              {card.answer}
            </Card.Content>
          </Card>
        </Grid.Column>
      )}
    </Grid>
    </Layout>)
}

export default Collection

