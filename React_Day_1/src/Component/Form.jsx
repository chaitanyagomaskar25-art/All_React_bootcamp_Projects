import React from 'react'
import { Form } from 'react-router'

const CreateForm = () => {
  return (
    <Form method='post' action='/product' style={{ padding: '15px', border: '1px solid #ccc' }}>
        <input name='title' type="text" placeholder='Add Title...' required />
        <br /><br />
        <input name='image' type="text" placeholder='Enter image url...' required />
        <br /><br />
        <button type='submit'>Add Recipe</button>
    </Form>
  )
}

export default CreateForm
