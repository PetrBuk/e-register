import {
  TextInput, TextField, NumberInput, NumberField, BooleanField, BooleanInput, ChipField, DateField,
  DateTimeInput, ReferenceArrayInput, ReferenceField, ReferenceInput, ReferenceManyField,
  SelectArrayInput, SelectInput, SingleFieldList, Create, Datagrid, Edit, List, Show,
  SimpleForm, SimpleShowLayout, Resource
} from 'react-admin'

import { FvAttribute, FvSchema } from './backendSchemas'
import { fvLedgerSchema } from './backendSchemas'
import { fvLedgerClassSchema } from './backendSchemas'
import { fvTransactionSchema } from './backendSchemas'
import { fvTransactionTemplateSchema } from './backendSchemas'

export const getAttribute = (attribute: FvAttribute, name: string, input = false) => {
  switch (attribute.type) {
    case 'email':
    case 'string':
      return (
        input ?
          <TextInput
            key={name}
            source={name}
          //multiline={attribute.richText}
          //label={}
          /> :
          <TextField
            key={name}
            source={name}
          //label={name}
          />
      );
    case 'number':
      return (
        input ? <NumberInput key={name} source={name} /*label={}*/ /> :
          <NumberField key={name} source={name} /*label={}*/ />
      );
    case 'boolean':
      return (
        input ? <BooleanInput key={name} source={name} /> :
          <BooleanField key={name} source={name} /*label={}*/ />
      );
    case 'date':
      return (
        input ? <DateTimeInput key={name} source={name} /> :
          <DateField key={name} source={name} /*label={}*/ />
      );
    case 'reference':
      if (input) {
        return (
          attribute.multiple ?
            <ReferenceArrayInput
              reference={attribute.model}
              key={name}
              source={name}
            /*label={}*/
            >
              <SelectArrayInput optionText={attribute.field || 'id'} />
            </ReferenceArrayInput> :
            <ReferenceInput
              reference={attribute.model}
              key={name}
              source={name}
            /*label={}*/
            >
              <SelectInput optionText={attribute.field || 'id'} />
            </ReferenceInput>
        )
      } else {
        return (
          attribute.multiple ?
            <ReferenceManyField
              reference={attribute.model}
              key={name}
              source={name}
              target={name}
            /*label={}*/
            >
              <SingleFieldList>
                <ChipField source={attribute.field || 'id'} />
              </SingleFieldList>
            </ReferenceManyField> :
            <ReferenceField
              key={name}
              source={name}
              reference={attribute.model}
            /*label={}*/
            >
              <TextField source={attribute.field || 'id'} />
            </ReferenceField>
        )
      }
    default:
      return (
        input ? <TextInput key={name} source={name} /*label={}*/ /> :
          <TextField key={name} source={name} /*label={}*/ />
      )
  }
}

export const getListComponent = (modelSchema: FvSchema) => {
  const fields: any = []

  for (const field in modelSchema) {
    fields.push(getAttribute(modelSchema[field], field))
  }

  return () => {
    return (
      <List>
        <Datagrid rowClick='show'>
          {fields}
        </Datagrid>
      </List>
    )
  }
}

export const getShowComponent = (modelSchema: FvSchema) => {
  const fields: any = []

  for (const field in modelSchema) {
    fields.push(getAttribute(modelSchema[field], field))
  }

  return () => {
    return (
      <Show>
        <SimpleShowLayout>
          {fields}
        </SimpleShowLayout>
      </Show>
    )
  }
}

export const getCreateComponent = (modelSchema: FvSchema) => {
  const fields: any = []

  for (const field in modelSchema) {
    fields.push(getAttribute(modelSchema[field], field, true))
  }

  return () => {
    return (
      <Create>
        <SimpleForm>
          {fields}
        </SimpleForm>
      </Create>
    )
  }
}

export const getEditComponent = (modelSchema: FvSchema) => {
  const fields: any = []

  for (const field in modelSchema) {
    fields.push(getAttribute(modelSchema[field], field, true))
  }

  return () => {
    return (
      <Edit>
        <SimpleForm>
          {fields}
        </SimpleForm>
      </Edit>
    )
  }
}

/**
 *
 * @returns Model to be used in react admin <Resource {...model} /> component
 */
export const fvModelToRaModel = (name: string, modelSchema: FvSchema) => {
  return {
    name: name,
    list: getListComponent(modelSchema),
    show: getShowComponent(modelSchema),
    create: getCreateComponent(modelSchema),
    edit: getEditComponent(modelSchema)
  }
}

export const ledgerResources = [
  <Resource {...fvModelToRaModel('Ledger', fvLedgerSchema)} />,
  <Resource {...fvModelToRaModel('LedgerClass', fvLedgerClassSchema)} />,
  <Resource {...fvModelToRaModel('Transaction', fvTransactionSchema)} />,
  <Resource {...fvModelToRaModel('TransactionTemplate', fvTransactionTemplateSchema)} />,
]