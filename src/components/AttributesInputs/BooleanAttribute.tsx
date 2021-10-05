import React from 'react'
import { BooleanInput } from 'react-admin'

const BooleanAttribute: React.FC<any> = (props: any) => {
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
                source={`${props.source}.defaultValue`}
                label='createType.settings.defaultValue'
            />
        </>
    )
}

export default BooleanAttribute;