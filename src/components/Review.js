import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Layout from './Layout'
import ReviewCard from './ReviewCard';
import { Card, Container, Divider, Form, Grid, Progress } from 'semantic-ui-react'


function Review() {
  const [timeRangeDays, setTimeRangeDays] = useState('7');
  const [cards, setCards] = useState([]);
  const [totCards, setTotCards] = useState();
  const [numCompleted, setNumCompleted] = useState(0);
  const {collectionId} = useParams();
  const daysInMillis = 24*60*60*1000;

  const currentCard = cards[0];
  useEffect(loadCards, [timeRangeDays]);

  function loadCards() {
    fetch('http://localhost:3001/cards')
      .then(r => r.json())
      .then(cards => {
        const filteredCards = cards.filter(card => {
          const needsReviewOrNew = (card.needsReview || card.needsReview === undefined);
          const notReviewedRecently = (card.lastReviewTime === undefined || card.lastReviewTime < Date.now() - timeRangeDays * daysInMillis);
          const matchesCollection = (collectionId !== undefined ? card.collectionId === collectionId : true);
          return (needsReviewOrNew || notReviewedRecently) && matchesCollection;
        });
        setCards(filteredCards.sort(() => Math.random() - 0.5));
        setTotCards(filteredCards.length)
      })
  }

  function updateCard(didGetIt) {
    const formData = { needsReview: !didGetIt, lastReviewTime: Date.now() };
    const id = currentCard.id;
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
        <Divider />
      </Form>
        {numCompleted} / {totCards}
        <Progress total={totCards} value={numCompleted} />
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
      </Container>
    </Layout>)
}

export default Review

