import React, { useState } from 'react'
import { Button, Card } from 'semantic-ui-react'
import CardForm from './CardForm'

function StudyCard({ card, onUpdateCard, onArchiveCard }) {

  const [isBeingEdited, setIsBeingEdited] = useState(false);

  function handleEdit(formData){
    fetch('http://localhost:3001/cards/'+card.id, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({...formData, needsReview: true})
    })
      .then(r=>r.json())
      .then(updatedCard => {
        onUpdateCard(updatedCard);
        setIsBeingEdited(false);
      })
  }

  function handleArchive(){
    fetch('http://localhost:3001/cards/'+card.id, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({isArchived: true})
    })
      .then(r=>r.json())
      .then(updatedCard => {
        onUpdateCard(updatedCard);
        setIsBeingEdited(false);
      })
    onArchiveCard(card.id);
  }

  if (isBeingEdited) return <CardForm question={card.question} answer={card.answer} onSubmitCard={handleEdit}/>
  else return (
    <Card fluid style={{ height: "100%" }}>
      <Card.Content style={{ backgroundColor: "AliceBlue" }}>
        {card.question}
      </Card.Content>
      <Card.Content>
        {card.answer}
      </Card.Content>
      <Button.Group basic compact>
        <Button compact onClick={() => setIsBeingEdited(true)}>Edit</Button>
        <Button compact onClick={handleArchive}>Archive</Button>
      </Button.Group>
    </Card>
  )
}

export default StudyCard
