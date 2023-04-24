import React, { useEffect, useState } from 'react'
import { Card, Container, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Layout from './Layout'

function Collection() {
  
  const [cards, setCards] = useState(['hi', 'hi']);

  return (
    <Layout collectionName={'Hello'}>
    <Grid columns={4} doubling>
      {cards.map((card, idx) =>
        <Grid.Column key={idx}>
          <Card fluid >
            <Card.Content textAlign={'center'}>
              {card}
            </Card.Content>
          </Card>
        </Grid.Column>
      )}
    </Grid>
    </Layout>)
}

export default Collection

