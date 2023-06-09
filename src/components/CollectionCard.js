import React, { useState, useEffect } from 'react'
import { Button, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function CollectionCard({ collection, setShowModal, setSelectedCollectionId }) {

  const [cards, setCards] = useState([]);
  useEffect(getCards, []);

  function getCards() {
    fetch('http://localhost:3001/cards?collectionId=' + collection.id)
      .then(r => r.json())
      .then(cards => setCards(cards))
  }

  function handleArchive() {
    setSelectedCollectionId(collection.id);
    setShowModal(true);
  }

  return (
    <Card fluid>
      <Card.Content textAlign='center'>
        <h3><Link to={`/collections/${collection.id}`} >{collection.name}</Link></h3>
      </Card.Content>
      <Card.Content textAlign='center'>
        {cards.length} Cards
      </Card.Content>
      <Button.Group basic compact>

      <Button compact onClick={handleArchive}>Archive</Button>
      <Button><Link to={`/review/${collection.id}`} syle={{color: "darkcyan"}}>Review</Link></Button>
      </Button.Group>
    </Card>
  )
}

export default CollectionCard

