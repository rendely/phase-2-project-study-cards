import React, { useEffect, useState } from 'react'
import { Button, Container, Grid } from 'semantic-ui-react'
import Layout from './Layout'
import CollectionCard from './CollectionCard';


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
        {/* TODO: Refactor into its own component? */}
        {collections.map(collection =>
          <Grid.Column key={collection.id}>
            <CollectionCard collection={collection} />           
          </Grid.Column>
        )}
      </Grid>
      </Container>
      <Container textAlign='center' style={{ padding: "40px" }}>
        <Button color='green'>Add Collection</Button>
      </Container>
    </Layout>)
}

export default Collections

