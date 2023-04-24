import React, { useEffect, useState } from 'react'
import { Card, Container, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Layout from './Layout'

function Collections() {
  
  const [collections, setCollections] = useState([]);
  useEffect(getCollections, []);
  function getCollections() {
    fetch('http://localhost:3001/collections')
      .then(r => r.json())
      .then(collections => setCollections(collections))
  }

  return (
    <Layout>
    <Grid columns={4} doubling>
      {collections.map(collection =>
        <Grid.Column key={collection.id}>
          <Card fluid >
            <Card.Content textAlign={'center'}>
              <Link to={`/collections/${collection.id}`} >{collection.name}</Link>
            </Card.Content>
          </Card>
        </Grid.Column>
      )}
    </Grid>
    </Layout>)
}

export default Collections

