import React, { useState } from 'react'
import { Button, Card } from 'semantic-ui-react'

function ReviewCard({card, updateCard}) {

  const [showAnswer, setShowAnswer] = useState(false);

  function handleGotIt(){
    updateCard();
    setShowAnswer(false);
  }

  return (
    <Card fluid style={{ height: "100%" }}>
      <Card.Content style={{ backgroundColor: "lightgray" }}>
        {card.question}
      </Card.Content>
      {showAnswer ?
        <>
          <Card.Content>
            {card.answer}
          </Card.Content>
          <Button.Group compact>
            <Button color="grey" onClick={() => console.log('didn\n know it')}>Didn't know it</Button>
            <Button color="olive" onClick={handleGotIt}>Got it!</Button>
          </Button.Group>
        </>
        :
        <Button color="blue" onClick={() => setShowAnswer(true)}> Show Answer</Button>
      }
    </Card>
  )
}

export default ReviewCard

