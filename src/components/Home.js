import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

function Home() {
  return (
    <Container text textAlign='center'>
      <h1>Study Cards</h1>
      <p>This is an app to let you create and review study cards.</p>
      <p>To get started you can manage your <b><Link to='/collections'>collections</Link>
      </b> or jump straight into <b><Link to='/review/'>reviewing</Link></b> cards.</p>
    </Container>)
}

export default Home