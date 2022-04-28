import React from 'react'
import { BooleanInput, TextInput } from 'react-admin'

const ReferenceAttribute: React.FC<any> = (props: any) => {
  return (
    <>
      <TextInput
        {...props}
        source={`${props.source}.reference`}
        label='createType.settings.reference'
      />
      <TextInput
        {...props}
        source={`${props.source}.referenceField`}
        label='createType.settings.referenceField'
      />
      <BooleanInput
        {...props}
        source={`${props.source}.multiple`}
        label='createType.settings.multiple'
        defaultChecked={false}
      />
      <BooleanInput
        {...props}
        source={`${props.source}.requiredField`}
        defaultValue={false}
        label='createType.settings.required'
      />
      <BooleanInput
        {...props}
        source={`${props.source}.defaultValue`}
        label='createType.settings.defaultValue'
      />
    </>
  )
}

export default ReferenceAttribute;