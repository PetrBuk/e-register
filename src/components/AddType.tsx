import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { Title, Create, SimpleForm, TextInput, Toolbar, Button } from 'react-admin'

const CreateToolbar = (props: any) => {
    const customSubmit = (e:any) => {
        e.preventDefault();
        console.log(e);
    }
    return (
        <Toolbar {...props} handleSubmit={customSubmit} >
            <Button disabled={props.pristine} label='Vytvořit'>
                <AddIcon/>
            </Button>
        </Toolbar>
    )
}

const AddType = () => {

    return (
        <Card>
            <Title title='Přidat nový typ' />
            <CardContent>
                Tady bude formulář pro vytvoření nového typu
                <Create basePath='/typesSettings' resource='typesSettings'>
                    <SimpleForm toolbar={<CreateToolbar/>}>
                        <TextInput source='name'/>
                    </SimpleForm>
                </Create>
            </CardContent>
        </Card>
    )
}

export default AddType;