import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Form, Dropdown, TextArea } from 'semantic-ui-react'

function CardForm({onAddCard}) {

  const formDataEmpty = {
    question: '',
    answer: ''
  };

  const [formData, setFormData] = useState(formDataEmpty)


  function handleChange(e, d){
    let key, val;
    if (e.name) {
      key = e.target.name;
      val = e.target.value;
    }else if (d) {
      key = d.name;
      val = d.value;
    }
    setFormData({...formData,
    [key]: val});
  }
  
  function handleSubmit(e){
    e.preventDefault();
    onAddCard(formData);
    setFormData(formDataEmpty);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
        <label>Question:</label>
          <TextArea name='question' placeholder='Add your question' onChange={handleChange} value={formData.question}></TextArea>
        </Form.Field>
        <Form.Field>
        <label>Answer:</label>
          <TextArea name='answer' placeholder='Add your answer' onChange={handleChange} value={formData.answer}></TextArea>
        </Form.Field>
        <Button color={'green'} type='submit'>Add Card</Button>
      </Form>
    </div>)
}

export default CardForm

