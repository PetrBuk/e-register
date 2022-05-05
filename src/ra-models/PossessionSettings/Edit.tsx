import React from 'react'
import {
  Edit, SimpleForm, TextInput, ArrayInput, SimpleFormIterator
} from 'react-admin'

import AttributeInput from '../../components/AttributesInputs/AttributeInput'
import { normalizeName } from '../../utils/utils'

const PossessionSettingsEdit: React.FC = () => {

  const transform = (record: any) => {
    const { attributes, ...newRecord } = record
    const newAttributes = [...attributes]
    newRecord.name = normalizeName(record.displayName)
    for (let attribute of newAttributes) {
      attribute.name = normalizeName(attribute.displayName)
    }
    newRecord.attributes = newAttributes
    return newRecord
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
      </SimpleForm>
    </Edit>
  )
}

export default PossessionSettingsEdit
