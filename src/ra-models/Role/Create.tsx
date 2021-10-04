import React from 'react'
import { Create, CreateProps, SimpleForm, TextInput } from 'react-admin'

const RoleCreate: React.FC<CreateProps> = (props) => {

    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source='name' required />
                <TextInput source='description' />
            </SimpleForm>
        </Create>
    );
};

export default RoleCreate;
