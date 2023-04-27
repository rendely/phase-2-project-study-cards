import React, { useEffect, useState } from 'react'
import { Button, Divider, Header, Icon, Card, Container, Grid, Modal } from 'semantic-ui-react'
import Layout from './Layout'
import CollectionCard from './CollectionCard';
import CollectionForm from './CollectionForm';

function Collections() {

  const [collections, setCollections] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCollectionId, setSelectedCollectionId] = useState(undefined);

  useEffect(getCollections, []);
  function getCollections() {
    fetch('http://localhost:3001/collections')
      .then(r => r.json())
      .then(collections => setCollections(collections.filter(c => c.isArchived === false || c.isArchived === undefined)))
  }

  function handleAddCollection(newCollection) {
    const formData = newCollection;
    fetch('http://localhost:3001/collections', {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(newCollection => setCollections(collection => [...collection, newCollection]))
  }

  function handleArchiveCollection(){
    if (selectedCollectionId){
      fetch('http://localhost:3001/collections/'+selectedCollectionId, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({isArchived: true})
      })
        .then(r => r.json())
        .then(newCollection => {
          setCollections(collection => collection.filter(c => c.id !== selectedCollectionId));
          setSelectedCollectionId(null);
        })
    }
    setShowModal(false);
  }

  return (
    <Layout>
      <Modal
        basic
        onClose={() => setShowModal(false)}
        onOpen={() => setShowModal(true)}
        open={showModal}
        size='small'
      >
        <Header icon>
          <Icon name='archive' />
          Archive Old Messages
        </Header>
        <Modal.Content>
          <p>
            Are you sure you want to archive this collection?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={() => setShowModal(false)}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' inverted onClick={handleArchiveCollection}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>

      </Modal>
      <Container>
        <Grid columns={4} doubling>
          {/* TODO: Refactor into its own component? */}
          {collections.map(collection =>
            <Grid.Column key={collection.id}>
              <CollectionCard collection={collection} setShowModal={setShowModal} setSelectedCollectionId={setSelectedCollectionId} />
            </Grid.Column>
          )}
        </Grid>
        <Divider />
        <Grid centered columns={4} doubling>
          <Grid.Column>
            <CollectionForm onAddCollection={handleAddCollection} />
          </Grid.Column>
        </Grid>

      </Container>
    </Layout >)
}

export default Collections

