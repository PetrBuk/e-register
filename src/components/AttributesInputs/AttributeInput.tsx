import React, { useState } from 'react'
import { useField } from 'react-final-form'
import { TextInput, SelectInput, useTranslate, Button } from 'react-admin'
import { Dialog, DialogActions, DialogContent, DialogTitle, makeStyles } from '@material-ui/core'
import { Tune, Close, Save } from '@material-ui/icons'

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

const AttributeInput: React.FC<any> = (props: any) => {

    const translate = useTranslate()
    const classes = useStyles()

    const field = useField(props.source)

    const [open, setOpen] = useState(false)

    const onCancel = () => {
        // ToDo: Get default value (Record | custom props | useField)
    }

    const onClose = () => {
        setOpen(false)
    }

    return (
        <div className={classes.wrapper}>
            <TextInput {...props} source={`${props.source}.name`} label='createType.attributes.name' required />
            <TypeInput {...props} source={`${props.source}.type`} label='createType.attributes.type' required />
            <Button label='createType.text.addSettings' onClick={() => setOpen(true)}>
                <Tune />
            </Button>
            <Dialog open={open} onClose={onClose} fullWidth maxWidth='md'>
                <DialogTitle>{translate('createType.text.addAttributeTitle')}</DialogTitle>
                <DialogContent className={classes.wrapper}>
                    <TextInput {...props} source={`${props.source}.name`} label='createType.attributes.name' required />
                    <TypeInput {...props} source={`${props.source}.type`} label='createType.attributes.type' required />
                    {field.input.value.type === 'text' && <TextAttribute {...props} source={`${props.source}.settings`} />}
                    {field.input.value.type === 'number' && <NumberAttribute {...props} source={`${props.source}.settings`} />}
                    {field.input.value.type === 'boolean' && <BooleanAttribute {...props} source={`${props.source}.settings`} />}
                    {field.input.value.type === 'datetime' && <DatetimeAttribute {...props} source={`${props.source}.settings`} />}
                    {field.input.value.type === 'reference' && <ReferenceAttribute {...props} source={`${props.source}.settings`} />}
                    <AuthInput type='attribute' />
                </DialogContent>
                <DialogActions>
                    <Button label='ra.action.cancel' onClick={onCancel}>
                        <Close />
                    </Button>
                    <Button label='ra.action.edit' onClick={onClose}>
                        <Save />
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AttributeInput;

const TypeInput = (props: any) => {

    const typeChoices = [
        { id: 'text', name: 'Text' },
        { id: 'number', name: 'Number' },
        { id: 'boolean', name: 'Boolean' },
        { id: 'datetime', name: 'Datetime' },
        { id: 'reference', name: 'Reference' }
    ]

    return (
        <SelectInput {...props} choices={typeChoices} />
    )
}