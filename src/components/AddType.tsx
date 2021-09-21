import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import {
    Title, Create, SimpleForm, TextInput, SaveButton,
    Toolbar, ArrayInput, SimpleFormIterator
} from 'react-admin'
import { useForm } from 'react-final-form'

import AttributeInput from './AttributesInputs/AttributeInput'
import AuthInput from './AttributesInputs/AuthInput'

const CreateToolbar = (props: any) => {

    const form = useForm();

    const preventSubmit = (e: any) => {
        e.preventDefault()
        return Promise.resolve(undefined as any)
    }

    const handleSubmit = () => {
        console.log(form.getState().values)
    }

    return (
        <Toolbar handleSubmit={preventSubmit}>
            <SaveButton
                disabled={props.pristine}
                handleSubmitWithRedirect={handleSubmit}
            />
        </Toolbar>
    )
}

const AddType: React.FC<any> = () => {

    return (
        <Card>
            <Title title='Přidat nový typ' />
            <CardContent>
                <Create basePath='/typesSettings' resource='typesSettings' title=' '>
                    <SimpleForm toolbar={<CreateToolbar />} redirect={false}>
                        <TextInput source='name' required />
                        <ArrayInput source='attributes'>
                            <SimpleFormIterator>
                                <AttributeInput />
                            </SimpleFormIterator>
                        </ArrayInput>
                        <AuthInput source='auth' type='type' />
                    </SimpleForm>
                </Create>
            </CardContent>
        </Card>
    )
}

export default AddType;