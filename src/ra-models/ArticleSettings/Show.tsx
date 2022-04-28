import React from 'react'
import { Show, SimpleShowLayout, TextField, ArrayField, Datagrid } from 'react-admin'
import { AuthField } from '../../components/AttributesInputs/AuthInput'

const ArticleSettingsShow: React.FC = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source='displayName' />
        <ArrayField source='attributes'>
          <Datagrid>
            <TextField source='displayName' />
          </Datagrid>
        </ArrayField>
        <AuthField source='auth' type='type' />
      </SimpleShowLayout>
    </Show>
  )
}

export default ArticleSettingsShow
