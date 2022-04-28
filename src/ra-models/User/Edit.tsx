import React from 'react'
import {
  Edit, EditProps, SimpleForm, TextInput, BooleanInput,
} from 'react-admin'

const UserEdit: React.FC<EditProps> = () => {

  return (
    <Edit>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='email' />
        <BooleanInput source='active' />
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit