import React, {useEffect, useState} from 'react'
import Layout from './Layout'
import ReviewCard from './ReviewCard';
import { Card, Container, Grid } from 'semantic-ui-react'

function Review() {

  const [cards, setCards] = useState([{question: 'hi', answer: 'yo', id:14}, {question: 'bye', answer: 'cya', id:15}]);
  const [currentCard, setCurrentCard] = useState({});

  useEffect(() => setCurrentCard(cards[0]),[cards]);

  function loadCards(){
    console.log('loaded');
  }

  function updateCard(){
    console.log('updated');
    setCards(cards.slice(1));
  }

  return (
    <Layout>
      <Container>
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

