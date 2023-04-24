import React, { useEffect, useState } from 'react'
import { Card, Container, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Collections() {
  const [collections, setCollections] = useState([]);
  useEffect(getCollections, []);
  function getCollections() {
    fetch('http://localhost:3001/collections')
      .then(r => r.json())
      .then(collections => setCollections(collections))
  }
  return (
    <Grid columns={4} doubling>
      {collections.map(collection =>
        <Grid.Column>
          <Card fluid key={collection.id} >
            <Card.Content textAlign={'center'}>
              <Link to={`/collections/${collection.id}`} >{collection.name}</Link>
            </Card.Content>
          </Card>
        </Grid.Column>
      )}
    </Grid>)
}

export default Collections

