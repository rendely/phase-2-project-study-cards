import React, { useState } from 'react'
import { Button, Card } from 'semantic-ui-react'
import StudyCardForm from './StudyCardForm'

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
      body: JSON.stringify({isArchived: !card.isArchived})
    })
      .then(r=>r.json())
      .then(updatedCard => {
        onArchiveCard(updatedCard);
      })
    
  }

  if (isBeingEdited) return <StudyCardForm question={card.question} answer={card.answer} onSubmitCard={handleEdit}/>
  else return (
    <Card fluid style={{ height: "100%" }}>
      <Card.Content style={{ backgroundColor: "AliceBlue" }}>
      <pre style={{whiteSpace: 'pre-wrap'}}>{card.isArchived ? '[Archived] ' : null}{card.question}</pre>
      </Card.Content>
      <Card.Content>
        <pre style={{whiteSpace: 'pre-wrap'}}>{card.answer}</pre>
      </Card.Content>
      <Button.Group basic compact>
        <Button compact onClick={() => setIsBeingEdited(true)}>Edit</Button>
        <Button compact onClick={handleArchive}>{card.isArchived ? 'Unarchive' : 'Archive'}</Button>
      </Button.Group>
    </Card>
  )
}

export default StudyCard
