import React, { useEffect, useState } from 'react'
import { Button, Card } from 'semantic-ui-react'

function ReviewCard({ card, updateCard }) {

  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    function handleKeyDown(e) {
      if (e.code === 'ArrowDown') setShowAnswer(true)
      if (e.code === 'ArrowRight') handleResult(true)
      if (e.code === 'ArrowLeft') handleResult(false)
    };
  }, [])

  function handleResult(didGetIt) {
    updateCard(didGetIt);
    setShowAnswer(false);
  }

  return (
    <Card fluid style={{ height: "100%" }}>
      <Card.Content>
        {card.question}
      </Card.Content>
      {showAnswer ?
        <>
          <Card.Content>
            {card.answer}
          </Card.Content>
          <Button.Group compact>
            <Button color="grey" onClick={() => handleResult(false)}>Didn't know it</Button>
            <Button color="olive" onClick={() => handleResult(true)}>Got it!</Button>
          </Button.Group>
        </>
        :
        <Button color="blue" onClick={() => setShowAnswer(true)}> Show Answer</Button>
      }
    </Card>
  )
}

export default ReviewCard

