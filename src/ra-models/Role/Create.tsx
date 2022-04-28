import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const RoleCreate: React.FC = () => {

  return (
    <Create>
      <SimpleForm>
        <TextInput source='name' required />
        <TextInput source='description' />
      </SimpleForm>
    </Create>
  )
}

export default RoleCreate
