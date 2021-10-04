import React from 'react'
import {
    Edit, EditProps, SimpleForm, TextInput, ArrayInput, SimpleFormIterator
} from 'react-admin'

import AttributeInput from '../../components/AttributesInputs/AttributeInput'
import AuthInput from '../../components/AttributesInputs/AuthInput'

const ArticleSettingsEdit: React.FC<EditProps> = (props) => {

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source='name' required />
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
