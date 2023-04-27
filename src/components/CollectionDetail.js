import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Divider, Grid } from 'semantic-ui-react'
import Layout from './Layout'
import CardForm from './CardForm'
import StudyCard from './StudyCard'

function CollectionDetail() {

  const params = useParams();
  const numColumns = Math.floor(window.innerWidth / 300);
  const [cards, setCards] = useState([]);
  const [collectionName, setCollectionName] = useState('');

  useEffect(getCards, [params.id]);
  useEffect(getCollectionInfo, [params.id]);

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
      .then(newCard => setCards(cards => [newCard,...cards]))
  }

  return (
    <Layout collectionName={collectionName}>
      <Container>
        <Grid columns={numColumns} >
          <Grid.Column>
            <CardForm onAddCard={handleAddCard} />
          </Grid.Column>
          {cards.map(card =>
            <Grid.Column key={card.id}>
              <StudyCard card={card} />
            </Grid.Column>
          )}
        </Grid>
      </Container>
    </Layout>)
}

export default CollectionDetail
