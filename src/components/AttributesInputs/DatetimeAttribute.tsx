import React from 'react'
import { BooleanInput, SelectInput, DateTimeInput } from 'react-admin'
import { useField, useForm } from 'react-final-form'

const DatetimeAttribute: React.FC<any> = (props: any) => {

    const form = useForm()
    const field = useField(props.source)

    const onTypeChange = () => {
        form.change(props.source + '.defaultValueField', '')
    }

    return (
        <>
            <BooleanInput
                {...props}
                source={`${props.source}.requiredField`}
                defaultValue={false}
                label='createType.settings.required'
            />
            <BooleanInput
                {...props}
                source={`${props.source}.uniqueField`}
                defaultValue={false}
                label='createType.settings.unique'
            />
            <SelectInput
                {...props}
                source={`${props.source}.typeField`}
                choices={[{ id: 'date', name: 'date' }, { id: 'time', name: 'time' }, { id: 'datetime-local', name: 'datetime' }]}
                defaultValue='datetime-local'
                onChange={onTypeChange}
                label='createType.settings.type'
            />
            <DateTimeInput 
                {...props}
                source={`${props.source}.defaultValue`}
                type={field.input.value.type || 'datetime-local'}
                label='createType.settings.defaultValue'
            />
        </>
    )
}

export default DatetimeAttribute;