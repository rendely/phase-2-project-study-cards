import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Grid } from 'semantic-ui-react'
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
      <Container>
      <Grid columns={4} doubling>
        {collections.map(collection =>
          <Grid.Column key={collection.id}>
            <Card fluid>
              <Card.Content textAlign={'center'}>
                <h3><Link to={`/collections/${collection.id}`} >{collection.name}</Link></h3>
              </Card.Content>
            </Card>
          </Grid.Column>
        )}
      </Grid>
      </Container>
      <Container textAlign='center' style={{ padding: "40px" }}>
        <Button color={'green'}>Add Collection</Button>
      </Container>
    </Layout>)
}

export default Collections

