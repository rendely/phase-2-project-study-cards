import React, {useEffect, useState} from 'react'
import Layout from './Layout'
import ReviewCard from './ReviewCard';
import { Card, Container, Grid, Progress } from 'semantic-ui-react'

function Review() {

  const [cards, setCards] = useState([]);
  const [totCards, setTotCards] = useState();
  const [numCompleted, setNumCompleted] = useState(0);

  const currentCard = cards[0];
  useEffect(loadCards,[])

  function loadCards(){
    fetch('http://localhost:3001/cards')
      .then(r => r.json())
      .then(cards => {
        const filteredCards = cards.filter(card => (card.needsReview || card.needsReview === undefined));
        setCards(filteredCards);
        setTotCards(filteredCards.length)
      })
  }

  function updateCard(didGetIt){
    const formData = { needsReview: !didGetIt };
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
      setNumCompleted(num => num+1);
    })
  }

  return (
    <Layout>
      <Container text textAlign='center'>
        <Progress total={totCards} value={numCompleted} progress='ratio'/>
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

