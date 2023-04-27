import React from 'react'
import { Button, Card } from 'semantic-ui-react'

function StudyCard({card}){
  return (
    <Card fluid style={{ height: "100%" }}>
    <Card.Content style={{ backgroundColor: "lightgray" }}>
      {card.question}
    </Card.Content>
    <Card.Content>
      {card.answer}
    </Card.Content>
    <Button.Group basic compact className={'hidden'}>
    <Button compact onClick={()=> console.log('edit')}>Edit</Button>
    <Button compact onClick={()=> console.log('archive')}>Archive</Button>
  </Button.Group>
  </Card>
  )
}

export default StudyCard

