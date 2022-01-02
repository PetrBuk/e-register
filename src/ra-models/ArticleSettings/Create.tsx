import React from 'react'
import { Create, CreateProps, SimpleForm, TextInput, ArrayInput, SimpleFormIterator } from 'react-admin'

import AttributeInput from '../../components/AttributesInputs/AttributeInput'
import AuthInput from '../../components/AttributesInputs/AuthInput'

const ArticleSettingsCreate: React.FC<CreateProps> = (props) => {

    const transform = (record: any) => {
        console.log(record)
        // ToDo: Add databese name field to the articleType and all its attributes
        return record
    }

    return (
        <Create {...props} transform={transform} >
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
    );
};

export default ArticleSettingsCreate;
