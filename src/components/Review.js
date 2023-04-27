import React from 'react'
import Layout from './Layout'
import ReviewCard from './ReviewCard';
import { Container, Grid } from 'semantic-ui-react'



function Review() {
  return (
    <Layout>
      <Container>
        <Grid columns={3} centered>
          <Grid.Column>
            <ReviewCard />
          </Grid.Column>
        </Grid>
      </Container>
    </Layout>)
}

export default Review

