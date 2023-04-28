import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import ReviewCard from './ReviewCard';
import { Card, Container, Form, Grid, Progress, Segment } from 'semantic-ui-react'
const daysInMillis = 24*60*60*1000;

function Review() {
  const [timeRangeDays, setTimeRangeDays] = useState('7');
  const [cards, setCards] = useState([]);
  const [totCards, setTotCards] = useState();
  const [numCompleted, setNumCompleted] = useState(0);

  const currentCard = cards[0];
  useEffect(loadCards, [timeRangeDays]);

  function loadCards() {
    fetch('http://localhost:3001/cards')
      .then(r => r.json())
      .then(cards => {
        const filteredCards = cards.filter(card => (card.needsReview || card.needsReview === undefined) || 
        (card.lastReviewTime === undefined || card.lastReviewTime < Date.now() - timeRangeDays * daysInMillis));
        setCards(filteredCards);
        setTotCards(filteredCards.length)
      })
  }

  function updateCard(didGetIt) {
    const formData = { needsReview: !didGetIt, lastReviewTime: Date.now() };
    const id = currentCard.id;
    console.log('updating!', formData, currentCard, id);
    fetch('http://localhost:3001/cards/' + id, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(updatedCard => {
        setCards(cards => cards.filter(card => card.id !== updatedCard.id));
        setNumCompleted(num => num + 1);
      })
  }

  function handleTimeChange(e, {value}){
    setTimeRangeDays(value);
    document.activeElement.blur();
  }

  return (
    <Layout>
      <Container text textAlign='center'>
      <Form>
        <Form.Group inline>
          <label>Show cards not reviewed in past:</label>
          <Form.Radio
            label='1 minute'
            value='0'
            checked={timeRangeDays === '0'}
            onChange={handleTimeChange}
          />
          <Form.Radio
            label='1 day'
            value='1'
            checked={timeRangeDays === '1'}
            onChange={handleTimeChange}
          />
          <Form.Radio
            label='1 week'
            value='7'
            checked={timeRangeDays === '7'}
            onChange={handleTimeChange}
          />
          <Form.Radio
            label='1 month'
            value='30'
            checked={timeRangeDays === '30'}
            onChange={handleTimeChange}
          />
        </Form.Group>
      </Form>
        <Progress total={totCards} value={numCompleted} progress='ratio' />
        <Grid columns={1} centered>
          <Grid.Column>
            {currentCard ?
              <ReviewCard card={currentCard} updateCard={updateCard} />
              :
              <Card fluid style={{ height: "100%" }}>
                <Card.Content>
                  Done! Congrats on completing your review!
                </Card.Content>
              </Card>
            }
          </Grid.Column>
        </Grid>
        <Segment secondary>
          <b>Keyboard Shortcuts:</b> Down arrow: Show answer • Left arrow: Didn't know it • Right arrow: Got it!
        </Segment>
      </Container>
    </Layout>)
}

export default Review

