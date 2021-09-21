import React from 'react'
import { Create, SimpleForm, TextInput, ArrayInput, SimpleFormIterator } from 'react-admin'

import AttributeInput from './AttributesInputs/AttributeInput'

const CreateTypesSettings: React.FC<any> = (props: any) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <ArrayInput source='attributes'>
                    <SimpleFormIterator>
                        <AttributeInput />
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Create>
    )
}

export default CreateTypesSettings;