import React from 'react'
import { Button, Card } from 'semantic-ui-react'

function ReviewCard() {
  return (
    <Card fluid style={{ height: "100%" }}>
      <Card.Content style={{ backgroundColor: "lightgray" }}>
        Question
      </Card.Content>
      <Card.Content>
        Answer
      </Card.Content>
      <Button.Group  compact>
        <Button color="red" onClick={() => console.log('hi')}>Missed</Button>
        <Button color="green" onClick={() => console.log('hi')}>Got it</Button>
      </Button.Group>
    </Card>
  )
}

export default ReviewCard

