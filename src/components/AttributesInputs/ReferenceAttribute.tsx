import React from 'react'
import { BooleanInput, TextInput } from 'react-admin'

export type ReferenceAttributeSettings = {
    reference: string | any,
    required?: boolean,
    defaultValue?: number,
}

const ReferenceAttribute: React.FC<any> = (props: any) => {
    return (
        <>
            <TextInput
                {...props}
                source={`${props.source}.reference`}
                label='createType.settings.reference'
            />
            <BooleanInput
                {...props}
                source={`${props.source}.required`}
                defaultValue={false}
                label='createType.settings.required'
            />
            <BooleanInput
                {...props}
                source={`${props.source}.defaultValue`}
                label='createType.settings.defaultValue'
            />
            <BooleanInput
                {...props}
                source={`${props.source}.multiple`}
                label='createType.settings.multiple'
            />
        </>
    )
}

export default ReferenceAttribute;