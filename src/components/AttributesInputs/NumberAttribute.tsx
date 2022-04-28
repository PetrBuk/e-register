import React from 'react'
import { BooleanInput, NumberInput } from 'react-admin'

const NumberAttribute: React.FC<any> = (props: any) => {
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
            <NumberInput
                {...props}
                source={`${props.source}.defaultValue`}
                label='createType.settings.defaultValue'
            />
            <NumberInput
                {...props}
                source={`${props.source}.validation.min`}
                label='createType.settings.min'
            />
            <NumberInput
                {...props}
                source={`${props.source}.validation.max`}
                label='createType.settings.max'
            />
        </>
    )
}

export default NumberAttribute