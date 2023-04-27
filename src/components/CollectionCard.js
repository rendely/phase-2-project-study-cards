import React, {useState, useEffect} from 'react'
import { Button, Card} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function CollectionCard({collection, setShowModal}){
  const [cards, setCards] = useState([]);

  useEffect(getCards,[]);

  function getCards() {
    fetch('http://localhost:3001/cards?collectionId=' + collection.id)
      .then(r => r.json())
      .then(cards => setCards(cards))
  }
  
  function handleArchive(){
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
      <Button  compact onClick={handleArchive}>Archive</Button>
  </Card>
  )
}

export default CollectionCard

