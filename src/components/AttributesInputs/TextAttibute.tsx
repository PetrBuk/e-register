import React from 'react'
import { BooleanInput, TextInput, NumberInput } from 'react-admin'

const TextAttribute: React.FC<any> = (props: any) => {

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
            <BooleanInput {...props}
                source={`${props.source}.richTextField`}
                defaultValue={false}
                label='createType.settings.richText'
            />
            <TextInput
                {...props}
                source={`${props.source}.defaultValueField`}
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