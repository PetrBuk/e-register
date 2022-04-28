import React from 'react'
import { Create, SimpleForm, TextInput, ArrayInput, SimpleFormIterator } from 'react-admin'

import AttributeInput from '../../components/AttributesInputs/AttributeInput'
import AuthInput from '../../components/AttributesInputs/AuthInput'

const ArticleSettingsCreate: React.FC = () => {

  const transform = (record: any) => {
    const { attributes, ...newRecord } = record
    const newAttributes = [...attributes]
    newRecord.name = record.displayName;
    for (let attribute of newAttributes) {
      attribute.name = attribute.displayName
    }
    newRecord.attributes = newAttributes
    return newRecord
  }

  return (
    <Create transform={transform} >
      <SimpleForm>
        <TextInput source='displayName' required />
        <ArrayInput source='attributes'>
          <SimpleFormIterator>
            <AttributeInput />
          </SimpleFormIterator>
        </ArrayInput>
        <AuthInput source='auth' type='type' />
      </SimpleForm>
    </Create>
  )
}

export default ArticleSettingsCreate
