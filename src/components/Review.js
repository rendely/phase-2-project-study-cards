import React, {useEffect, useState} from 'react'
import Layout from './Layout'
import ReviewCard from './ReviewCard';
import { Card, Container, Grid } from 'semantic-ui-react'

function Review() {

  const [cards, setCards] = useState([]);
  // const [currentCard, setCurrentCard] = useState({});

  const currentCard = cards[0];

  useEffect(loadCards,[])
  // useEffect(() => setCurrentCard(cards[0]),[cards]);

  function loadCards(){
    console.log('loading');
    fetch('http://localhost:3001/cards')
      .then(r => r.json())
      .then(cards => setCards(cards.filter(card => card.needsReview)))
  }

  console.log(cards);

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
    .then(updatedCard => setCards(cards => cards.filter(card => card.id !== updatedCard.id)))
  }

  return (
    <Layout>
      <Container textAlign='center'>
        Todo: progress bar on number of cards to review
        <Grid columns={3} centered>
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

