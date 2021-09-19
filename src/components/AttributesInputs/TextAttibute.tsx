import React from 'react'
import { BooleanInput, TextInput, NumberInput } from 'react-admin'

export type TextAtributeSettings = {
    required?: boolean,
    unique?: boolean,
    defaultValue?: string,
    richText?: boolean,
    validation?: {
        minLength?: number,
        maxLength?: number,
        regExp?: string
    }
}

const TextAttribute: React.FC = (props: any) => {

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
            <BooleanInput {...props}
                source={`${props.source}.richText`}
                defaultValue={false}
                label='createType.settings.richText'
            />
            <TextInput
                {...props}
                source={`${props.source}.defaultValue`}
                label='createType.settings.defaultValue'
            />
            <NumberInput
                {...props}
                source={`${props.source}.validation.minLength`}
                label='createType.settings.minLength'
            />
            <NumberInput
                {...props}
                source={`${props.source}.validation.maxLength`}
                label='createType.settings.maxLength'
            />
            <TextInput
                {...props}
                source={`${props.source}.validation.regExp`}
                label='createType.settings.regExp'
            />
        </>
    )
}

export default TextAttribute;