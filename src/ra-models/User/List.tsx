import React from 'react'
import { List, ListProps, Datagrid, TextField, BooleanField } from 'react-admin'

const UserList: React.FC<ListProps> = () => {
  return <List>
    <Datagrid rowClick='show'>
      <TextField source='id' />
      <TextField source='name' />
      <BooleanField source='active' />
    </Datagrid>
  </List>
}

export default UserList