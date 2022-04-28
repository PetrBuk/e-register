import React, { useState } from 'react'
import { TextInput, SelectInput, useTranslate, Button, useRecordContext } from 'react-admin'
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Tune, Close, Check } from '@mui/icons-material'
import { useForm, useWatch } from 'react-hook-form'

import TextAttribute from './TextAttibute'
import NumberAttribute from './NumberAttribute'
import BooleanAttribute from './BooleanAttribute'
import DatetimeAttribute from './DatetimeAttribute'
import ReferenceAttribute from './ReferenceAttribute'
import AuthInput from './AuthInput'

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexFlow: 'column'
  }
})
// ToDo: check {...props} neccessarity
const AttributeInput: React.FC<any> = (props: any) => {

  const translate = useTranslate()
  const classes = useStyles()

  const record = useRecordContext()
  const { setValue } = useForm()

  const field = useWatch({name: props.source})

  const [open, setOpen] = useState(false)

  const onCancel = () => {
    setValue(props.source, record)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.wrapper}>
      <TextInput {...props} source={`${props.source}.displayName`} label='createType.attributes.name' required />
      <TypeInput {...props} source={`${props.source}.typeField`} label='createType.attributes.type' required />
      <Button label='createType.text.addSettings' onClick={() => setOpen(true)}>
        <Tune />
      </Button>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth='md'>
        <DialogTitle>{translate('createType.text.addAttributeTitle')}</DialogTitle>
        <DialogContent className={classes.wrapper}>
          <TextInput {...props} source={`${props.source}.displayName`} label='createType.attributes.name' required />
          <TypeInput {...props} source={`${props.source}.typeField`} label='createType.attributes.type' required />
          {field.input.value.typeField === 'string' && <TextAttribute {...props} source={`${props.source}.settings`} />}
          {field.input.value.typeField === 'number' && <NumberAttribute {...props} source={`${props.source}.settings`} />}
          {field.input.value.typeField === 'boolean' && <BooleanAttribute {...props} source={`${props.source}.settings`} />}
          {field.input.value.typeField === 'datetime' && <DatetimeAttribute {...props} source={`${props.source}.settings`} />}
          {field.input.value.typeField === 'reference' && <ReferenceAttribute {...props} source={`${props.source}.settings`} />}
          <AuthInput type='attribute' />
        </DialogContent>
        <DialogActions>
          <Button label='ra.action.cancel' onClick={onCancel}>
            <Close />
          </Button>
          <Button label='ra.action.confirm' onClick={onClose}>
            <Check />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AttributeInput

const TypeInput = (props: any) => {

  const typeChoices = [
    { id: 'string', name: 'String' },
    { id: 'number', name: 'Number' },
    { id: 'boolean', name: 'Boolean' },
    { id: 'datetime', name: 'Datetime' },
    { id: 'reference', name: 'Reference' }
  ]

  return (
    <SelectInput {...props} choices={typeChoices} />
  )
}