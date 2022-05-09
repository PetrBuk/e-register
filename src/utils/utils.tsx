import {
  List, Show, SimpleShowLayout, Create, Edit, SimpleForm, Datagrid, TextInput, TextField, NumberInput, NumberField,
  BooleanInput, BooleanField, DateTimeInput, DateField, ReferenceField, ReferenceInput, SelectInput,
  ReferenceArrayInput, SelectArrayInput, ReferenceManyField, ChipField, SingleFieldList
} from 'react-admin'

import { ArticleTypeSettings, AttributeSettings, AttributeType } from "../providers/dummyData"

export const getListComponent = (settings: ArticleTypeSettings) => {
  const fields = settings.attributes.map(obj => {
    return (
      getField(obj)
    )
  })
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

export const getShowComponent = (settings: ArticleTypeSettings) => {
  const fields = settings.attributes.map((obj) => {
    return (
      getField(obj)
    )
  })
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

export const getCreateComponent = (settings: ArticleTypeSettings) => {
  const fields = settings.attributes.map((obj) => {
    return (
      getField(obj, true)
    )
  })
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

export const getEditComponent = (settings: ArticleTypeSettings) => {
  const fields = settings.attributes.map((obj) => {
    return (
      getField(obj, true)
    )
  })
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

const getField = (settings: AttributeSettings, input = false) => {
  switch (settings.typeField) {
    case AttributeType.String:
      return (
        input ?
          <TextInput
            key={settings.name}
            source={settings.name}
            multiline={settings?.settings?.richtext}
            label={settings.displayName}
          /> :
          <TextField
            key={settings.name}
            source={settings.name}
            label={settings.displayName}
          />
      );
    case AttributeType.Number:
      return (
        input ? <NumberInput key={settings.name} source={settings.name} label={settings.displayName} /> :
          <NumberField key={settings.name} source={settings.name} label={settings.displayName} />
      );
    case AttributeType.Boolean:
      return (
        input ? <BooleanInput key={settings.name} source={settings.name} /> :
          <BooleanField key={settings.name} source={settings.name} label={settings.displayName} />
      );
    case AttributeType.Datetime:
      return (
        input ? <DateTimeInput key={settings.name} source={settings.name} /> :
          <DateField key={settings.name} source={settings.name} label={settings.displayName} />
      );
    case AttributeType.Reference:
      if (input) {
        return (
          settings.settings.multiple ?
            <ReferenceArrayInput
              reference={normalizeName(settings.settings?.reference)}
              key={settings.name}
              source={settings.name}
              label={settings.displayName}
            >
              <SelectArrayInput optionText={settings.settings?.referenceField || 'id'} />
            </ReferenceArrayInput> :
            <ReferenceInput
              reference={normalizeName(settings.settings?.reference)}
              key={settings.name}
              source={settings.name}
              label={settings.displayName}
            >
              <SelectInput optionText={normalizeName(settings.settings?.referenceField) || 'id'} />
            </ReferenceInput>
        )
      } else {
        return (
          settings.settings.multiple ?
            <ReferenceManyField
              reference={normalizeName(settings.settings?.reference)}
              key={settings.name}
              source={settings.name}
              target={settings.name}
              label={settings.displayName}
            >
              <SingleFieldList>
                <ChipField source={normalizeName(settings.settings?.referenceField) || 'id'} />
              </SingleFieldList>
            </ReferenceManyField> :
            <ReferenceField
              key={settings.name}
              source={settings.name}
              reference={normalizeName(settings.settings?.reference)}
              label={settings.displayName}
            >
              <TextField source={normalizeName(settings.settings?.referenceField) || 'id'} />
            </ReferenceField>
        )
      }
    default:
      return (
        input ? <TextInput key={settings.name} source={settings.name} label={settings.displayName} /> :
          <TextField key={settings.name} source={settings.name} label={settings.displayName} />
      )
  }
}

export const normalizeName = (name: string) => {
  if (name) {
    const normalizedName = name.normalize('NFD').replace(/\p{Diacritic}/gu, '')
    const trimmedName = normalizedName.replace(/\s/g, '')
    return trimmedName.toLowerCase()
  }
  return ''
}