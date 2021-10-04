import React from 'react'
import { Create, CreateProps, SimpleForm, TextInput, ArrayInput, SimpleFormIterator } from 'react-admin'

import AttributeInput from '../../components/AttributesInputs/AttributeInput'
import AuthInput from '../../components/AttributesInputs/AuthInput'

const ArticleSettingsCreate: React.FC<CreateProps> = (props) => {

    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source='name' required />
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
