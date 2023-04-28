import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'
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
      .then(cards => setCards(cards.filter(c => c.isArchived === false || c.isArchived === undefined)))
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

  function handleUpdateCard(newCard){
    setCards(cards => cards.map(c => c.id === newCard.id ? newCard : c))
  }

  function handleArchiveCard(id){
    setCards(cards => cards.filter(c => c.id !== id))
  }

  return (
    <Layout collectionName={collectionName}>
      <Container>
        <h1>{collectionName}</h1>
        <Grid columns={numColumns} >
          <Grid.Column>
            <CardForm onSubmitCard={handleAddCard}  />
          </Grid.Column>
          {cards.map(card =>
            <Grid.Column key={card.id}>
              <StudyCard card={card} onUpdateCard={handleUpdateCard} onArchiveCard={handleArchiveCard}/>
            </Grid.Column>
          )}
        </Grid>
      </Container>
    </Layout>)
}

export default CollectionDetail
