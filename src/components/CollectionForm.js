import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Form, Input } from 'semantic-ui-react'

function CollectionForm({onAddCollection}) {

  const formDataEmpty = {
    name: ''
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
    onAddCollection(formData);
    setFormData(formDataEmpty);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
        <label>Name:</label>
          <Input name='name' placeholder='Add your question' onChange={handleChange} value={formData.name}></Input>
        </Form.Field>
        <Button color={'green'} type='submit'>Add Collection</Button>
      </Form>
    </div>)
}

export default CollectionForm

