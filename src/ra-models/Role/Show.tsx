import React from 'react'
import { Show, SimpleShowLayout, TextField } from 'react-admin'

const RoleShow: React.FC = () => {

  return (
    <Show>
      <SimpleShowLayout>
        <TextField source='name' />
        <TextField source='description' />
      </SimpleShowLayout>
    </Show>
  )
}

export default RoleShow
