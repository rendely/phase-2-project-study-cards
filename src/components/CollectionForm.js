import React, { useState } from 'react'
import { Button, Card, Form, Input } from 'semantic-ui-react'

function CollectionForm({ onAddCollection }) {

  const formDataEmpty = { name: '' };
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
    onAddCollection(formData);
    setFormData(formDataEmpty);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Card fluid style={{ height: "100%" }}>
        <Card.Content>
          <Form.Field>
            <Input name='name' placeholder='Name of your new collection' onChange={handleChange} value={formData.name}></Input>
          </Form.Field>
        </Card.Content>
        <Button compact color={'green'} type='submit'>Add Collection</Button>
      </Card>
    </Form>
  )
}

export default CollectionForm
