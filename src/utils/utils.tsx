import {
    List, Show, SimpleShowLayout, Create, Edit, SimpleForm, Datagrid, TextInput, TextField, NumberInput, NumberField,
    BooleanInput, BooleanField
} from 'react-admin'

import { ArticleTypeSettings, AttributeSettings, AttributeType } from "../providers/dummyData"

export const getListComponent = (settings: ArticleTypeSettings) => {
    const fields = settings.attributes.map(obj => {
        return (
            getField(obj)
        )
    })

    return (props: any) => {
        return (
            <List {...props}>
                <Datagrid rowClick='show'>
                    {fields}
                </Datagrid>
            </List>
        )
    }
}

export const getShowComponent = (settings: ArticleTypeSettings) => {
    const fields = settings.attributes.map((obj) => {
        return (
            getField(obj)
        )
    })
    return (props: any) => {
        return (
            <Show {...props}>
                <SimpleShowLayout>
                    {fields}
                </SimpleShowLayout> 
            </Show>
        )
    }
}

export const getCreateComponent = (settings: ArticleTypeSettings) => {
    const fields = settings.attributes.map((obj) => {
        return (
            getField(obj, true)
        )
    })
    return (props: any) => {
        return (
            <Create {...props}>
                <SimpleForm>
                    {fields}
                </SimpleForm> 
            </Create>
        )
    }
}

export const getEditComponent = (settings: ArticleTypeSettings) => {
    const fields = settings.attributes.map((obj) => {
        return (
            getField(obj, true)
        )
    })
    return (props: any) => {
        return (
            <Edit {...props}>
                <SimpleForm>
                    {fields}
                </SimpleForm> 
            </Edit>
        )
    }
}

const getField = (settings: AttributeSettings, input = false) => {
    switch (settings.type) {
        case AttributeType.String:
            return (
                input ? <TextInput key={settings.name} source={settings.name} /> : <TextField key={settings.name} source={settings.name} />
            );
        case AttributeType.Number:
            return (
                input ? <NumberInput key={settings.name} source={settings.name} /> : <NumberField key={settings.name} source={settings.name} />
            );
        case AttributeType.Boolean:
            return (
                input ? <BooleanInput key={settings.name} source={settings.name} /> : <BooleanField key={settings.name} source={settings.name} />
            )
        default:
            return (
                input? <TextInput key={settings.name} source={settings.name} /> : <TextField key={settings.name} source={settings.name} />
            )
    }
}