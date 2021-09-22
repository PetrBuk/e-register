import React, { useState } from 'react'
import { ArrayInput, SimpleFormIterator, SelectInput, BooleanInput, useTranslate } from 'react-admin'
import { FormControlLabel, Switch } from '@material-ui/core'

const AuthInput: React.FC<any> = (props: any) => {

    const [baseRestriction, setBaseRestriction] = useState(false)
    const [customRestriction, setCustomRestriction] = useState(false)

    const translate = useTranslate()

    return (
        <>
            <FormControlLabel
                control={<Switch
                    checked={baseRestriction}
                    onChange={() => setBaseRestriction(!baseRestriction)}
                />}
                label={translate('createType.settings.auth.baseRestrict')}
            />
            {baseRestriction && <RestrictInput
                {...props}
                source={`${props.source}.base`}
                roleLabel={'role'}
                permLabel={'permission'}
            />}
            <FormControlLabel
                control={<Switch
                    checked={customRestriction}
                    onChange={() => setCustomRestriction(!customRestriction)}
                />}
                label={translate('createType.settings.auth.customRestrict')}
            />
            {customRestriction &&
                <>
                    <RestrictInput
                        {...props}
                        source={`${props.source}.show`}
                        roleLabel={'showRole'}
                        permLabel={'showPermission'}
                    />
                    <RestrictInput
                        {...props}
                        source={`${props.source}.create`}
                        roleLabel={'createRole'}
                        permLabel={'createPermission'}
                    />
                    <RestrictInput
                        {...props}
                        source={`${props.source}.edit`}
                        roleLabel={'editRole'}
                        permLabel={'editPermission'}
                    />
                    <RestrictInput
                        {...props}
                        source={`${props.source}.delete`}
                        roleLabel={'deleteRole'}
                        permLabel={'deletePermission'}
                    />
                </>
            }
        </>
    )
}

export default AuthInput;

const RestrictInput: React.FC<any> = (props) => {

    const { permLabel, roleLabel, ...rest } = props

    return (
        <>
            <ArrayInput
                {...rest}
                source={`${props.source}.requiredRole`}
                label={`createType.settings.auth.${roleLabel}`}
            >
                <SimpleFormIterator>
                    <SelectInput source='role' label='createType.settings.auth.roleSelect' />
                    <BooleanInput source='and' label='createType.settings.auth.concat'/>
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput
                {...rest}
                source={`${props.source}.requiredPermission`}
                label={`createType.settings.auth.${permLabel}`}
            >
                <SimpleFormIterator>
                    <SelectInput source='permission' label='createType.settings.auth.permSelect'/>
                    <BooleanInput source='and' label='createType.settings.auth.concat'/>
                </SimpleFormIterator>
            </ArrayInput>
        </>
    )
}