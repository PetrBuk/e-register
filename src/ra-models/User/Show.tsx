import React from 'react'
import {
  Show, ShowProps, SimpleShowLayout, TextField,
  EmailField, BooleanField,
} from 'react-admin'

const UserShow: React.FC<ShowProps> = () => {

  return (
    <Show>
      <SimpleShowLayout>
        <TextField source='name' />
        <EmailField source='email' />
        <BooleanField source='active' />
      </SimpleShowLayout>
    </Show>
  )
}

export default UserShow
