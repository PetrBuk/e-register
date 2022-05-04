import React from 'react'
import { Show, SimpleShowLayout, TextField, ArrayField, Datagrid } from 'react-admin'

const PossessionSettingsShow: React.FC = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source='displayName' />
        <ArrayField source='attributes'>
          <Datagrid>
            <TextField source='displayName' />
          </Datagrid>
        </ArrayField>
      </SimpleShowLayout>
    </Show>
  )
}

export default PossessionSettingsShow
