import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const RoleEdit: React.FC = () => {

  return (
    <Edit>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='description' />
      </SimpleForm>
    </Edit>
  )
}

export default RoleEdit