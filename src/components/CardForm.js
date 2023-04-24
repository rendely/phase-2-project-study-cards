import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Form, Dropdown, TextArea } from 'semantic-ui-react'

import Layout from './Layout'

function CardForm() {
  const params = useParams();
  const [collectionName, setCollectionName] = useState('');
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    collectionId: 0
  })

  useEffect(getCollectionInfo, [params]);

  function getCollectionInfo() {
    fetch('http://localhost:3001/collections/' + params.id)
      .then(r => r.json())
      .then(collection => {
        setCollectionName(collection.name);
        setFormData({...formData, collectionId: collection.id});
      })
  }

  function handleChange(e){
    setFormData({...formData,
    [e.target.name]: e.target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:3001/cards', {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(newCard => console.log(newCard))
  }

  // TODO: Swap this for fetched list of collections
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
      <Form onSubmit={handleSubmit}>
        <Form.Field>
        <label>Collection:</label>
        <Dropdown
        fluid
        selection
        options={collectionOptions}
        value={formData.collectionId}
        onChange={handleChange}
      />
        </Form.Field>
        <Form.Field>
        <label>Question:</label>
          <TextArea name='question' placeholder='Add your question' onChange={handleChange}></TextArea>
        </Form.Field>
        <Form.Field>
        <label>Answer:</label>
          <TextArea name='answer' placeholder='Add your answer' onChange={handleChange}></TextArea>
        </Form.Field>
        <Button color={'green'} type='submit'>Add Card</Button>
      </Form>
    </Layout>)
}

export default CardForm

