import React from 'react'
import {
    Edit, EditProps, SimpleForm, TextInput,
} from 'react-admin'

const PermissionEdit: React.FC<EditProps> = (props) => {

    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='description' />
            </SimpleForm>
        </Edit>
    )
}

export default PermissionEdit