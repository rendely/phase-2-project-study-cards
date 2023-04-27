import React, { useState } from 'react'
import { Button, Card } from 'semantic-ui-react'

function ReviewCard() {

  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card fluid style={{ height: "100%" }}>
      <Card.Content style={{ backgroundColor: "lightgray" }}>
        Question
      </Card.Content>
      {showAnswer ?
      <>
        <Card.Content>
        Answer
      </Card.Content>
       <Button.Group compact>
       <Button color="grey" onClick={() => console.log('didn\n know it')}>Didn't know it</Button>
       <Button color="olive" onClick={() => console.log('got it!')}>Got it!</Button>
     </Button.Group>
     </>
        :
        <Button color="blue" onClick={() => setShowAnswer(true)}> Show Answer</Button>
      }

    </Card>
  )
}

export default ReviewCard

