import React from 'react'
import {
    Edit, EditProps, SimpleForm, TextInput, ArrayInput, SimpleFormIterator
} from 'react-admin'

import AttributeInput from '../../components/AttributesInputs/AttributeInput'
import AuthInput from '../../components/AttributesInputs/AuthInput'

const ArticleSettingsEdit: React.FC<EditProps> = (props) => {

    const transform = (record: any) => {
        console.log(record)
        // ToDo: Add databese name field to the articleType and all its attributes
        return record
    }

    return (
        <Edit {...props} transform={transform}>
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
