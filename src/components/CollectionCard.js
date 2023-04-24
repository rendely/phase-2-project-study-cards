import React, {useState, useEffect} from 'react'
import { Card} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function CollectionCard({collection}){
  const [cards, setCards] = useState([]);

  useEffect(getCards,[]);

  function getCards() {
    fetch('http://localhost:3001/cards?collectionId=' + collection.id)
      .then(r => r.json())
      .then(cards => setCards(cards))
  }

  return (
    <Card fluid>
    <Card.Content textAlign='center'>
      <h3><Link to={`/collections/${collection.id}`} >{collection.name}</Link></h3>
    </Card.Content>
    <Card.Content meta textAlign='center'>
      {cards.length} Cards
    </Card.Content>
  </Card>
  )
}

export default CollectionCard

