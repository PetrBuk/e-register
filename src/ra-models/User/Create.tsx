import React from 'react'
import { Create, CreateProps, SimpleForm, TextInput, BooleanInput } from 'react-admin'

const UserCreate: React.FC<CreateProps> = () => {

  return (
    <Create>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='email' required />
        <BooleanInput source='active' />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate
