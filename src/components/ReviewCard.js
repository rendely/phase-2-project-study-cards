import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'

function ReviewCard({ card, updateCard }) {

  const [showAnswer, setShowAnswer] = useState(false);

  const cardRef = useRef(null);
  
  useEffect(() => {cardRef.current.focus();},[]);

  function handleKeyDown(e) {
    if (e.code === 'ArrowDown') setShowAnswer(true)
    else if (e.code === 'ArrowRight') handleResult(true)
    else if (e.code === 'ArrowLeft') handleResult(false)
  };

  function handleResult(didGetIt) {
    console.log(card, didGetIt);
    updateCard(didGetIt);
    setShowAnswer(false);
  }

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0} ref={cardRef}>
    <Card fluid style={{ height: "100%" }} >
      <Card.Content style={{ backgroundColor: "AliceBlue" }}>
      <pre style={{whiteSpace: 'pre-wrap'}}>{card.question}</pre>
      </Card.Content>
      {showAnswer ?
        <>
          <Card.Content >
          <pre style={{whiteSpace: 'pre-wrap'}}>{card.answer}</pre>
          </Card.Content>
          <Button.Group compact>
            <Button color="grey" onClick={() => handleResult(false)}><Icon name='arrow left' /> Didn't know it</Button>
            <Button color="olive" onClick={() => handleResult(true)}>Got it! <Icon name='arrow right' /> </Button>
          </Button.Group>
        </>
        :
        <Button color="blue" onClick={() => setShowAnswer(true)}> Show Answer <Icon name='arrow down' /> </Button>
      }
    </Card>
    </div>
  )
}

export default ReviewCard

