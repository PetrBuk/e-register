import React from 'react'
import { List, Datagrid, TextField } from 'react-admin'

const ArticleSettingsList: React.FC = () => {
  return <List>
    <Datagrid rowClick='show'>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='description' />
    </Datagrid>
  </List>
}

export default ArticleSettingsList
