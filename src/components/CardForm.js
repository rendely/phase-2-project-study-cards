import React, { useState } from 'react'
import { Button, Card, Form, TextArea } from 'semantic-ui-react'

function CardForm({ onSubmitCard, question, answer }) {

  const formDataEmpty = {
    question: question || '',
    answer: answer || ''
  };
  const [formData, setFormData] = useState(formDataEmpty)

  function handleChange(e, d) {
    let key, val;
    if (e.name) {
      key = e.target.name;
      val = e.target.value;
    } else if (d) {
      key = d.name;
      val = d.value;
    }
    setFormData({
      ...formData,
      [key]: val
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitCard(formData);
    setFormData(formDataEmpty);
  }

  return (
    <Card fluid style={{ height: "100%" }}>
      <Card.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Question:</label>
            <TextArea rows="2" name='question' placeholder='Add your question' onChange={handleChange} value={formData.question}></TextArea>
          </Form.Field>
          <Form.Field>
            <label>Answer:</label>
            <TextArea rows="2" name='answer' placeholder='Add your answer' onChange={handleChange} value={formData.answer}></TextArea>
          </Form.Field>
          <Button color={'green'} type='submit'>Submit</Button>
        </Form>
      </Card.Content>
    </Card>
  )
}

export default CardForm

