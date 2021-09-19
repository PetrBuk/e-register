import React from 'react'
import { BooleanInput, NumberInput } from 'react-admin'

export type NumberAttributeSettings = {
    required?: boolean,
    unique?: boolean,
    defaultValue?: number,
    format?: any,
    validation?: {
        min?: number,
        max?: number
    }

}

const NumberAttribute: React.FC<any> = (props: any) => {
    return (
        <>
            <BooleanInput
                {...props}
                source={`${props.source}.required`}
                defaultValue={false}
                label='createType.settings.required'
            />
            <BooleanInput
                {...props}
                source={`${props.source}.unique`}
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

export default NumberAttribute;