import React from 'react'
import {
  Edit, SimpleForm, TextInput, ArrayInput, SimpleFormIterator
} from 'react-admin'

import AttributeInput from '../../components/AttributesInputs/AttributeInput'
import AuthInput from '../../components/AttributesInputs/AuthInput'

const ArticleSettingsEdit: React.FC = () => {

  const transform = (record: any) => {
    return record
  }

  return (
    <Edit transform={transform}>
      <SimpleForm>
        <TextInput source='displayName' required />
        <ArrayInput source='attributes'>
          <SimpleFormIterator>
            <AttributeInput />
          </SimpleFormIterator>
        </ArrayInput>
        <AuthInput source='auth' type='type' />
      </SimpleForm>
    </Edit>
  )
}

export default ArticleSettingsEdit
