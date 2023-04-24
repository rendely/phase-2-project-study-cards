import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Form, Dropdown, TextArea } from 'semantic-ui-react'

import Layout from './Layout'

function CardForm() {
  const params = useParams();
  const [collectionName, setCollectionName] = useState('');

  useEffect(getCollectionInfo, [params]);

  function getCollectionInfo() {
    fetch('http://localhost:3001/collections?id=' + params.id)
      .then(r => r.json())
      .then(collections => setCollectionName(collections[0].name))
  }

  const collectionOptions = [
    {
      key: 'Javascript',
      text: 'Javascript',
      value: 1   
    },
    {
      key: 'html',
      text: 'HTML',
      value: 3  
    }
    ]

  return (
    <Layout>
      <Form>
        <Form.Field>
        <label>Collection:</label>
        <Dropdown
        fluid
        selection
        options={collectionOptions}
        value={Number(params.id)}
      />
        </Form.Field>
        <Form.Field>
        <label>Question:</label>
          <TextArea name='question' placeholder='Add your question'></TextArea>
        </Form.Field>
        <Form.Field>
        <label>Answer:</label>
          <TextArea name='answer' placeholder='Add your answer'></TextArea>
        </Form.Field>
        <Button color={'green'} type='Submit'>Add Card</Button>
      </Form>
    </Layout>)
}

export default CardForm

