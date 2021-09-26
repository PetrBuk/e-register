import React, { useState } from 'react'
import { ArrayInput, SimpleFormIterator, SelectInput, useTranslate } from 'react-admin'
import { FormControlLabel, makeStyles, Switch, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexFlow: 'column'
    }
})

const AuthInput: React.FC<any> = (props: any) => {

    const [baseRestriction, setBaseRestriction] = useState(false)
    const [customRestriction, setCustomRestriction] = useState(false)

    const translate = useTranslate()
    const classes = useStyles()

    return (
        <div className={classes.container} >
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
                        title={'Omezení zobrazení'}
                        source={`${props.source}.show`}
                        roleLabel={'showRole'}
                        permLabel={'showPermission'}
                    />
                    {props.type === 'type' &&
                        <RestrictInput
                            {...props}
                            source={`${props.source}.create`}
                            title={'Omezení vytváření'}
                            roleLabel={'createRole'}
                            permLabel={'createPermission'}
                        />
                    }
                    <RestrictInput
                        {...props}
                        source={`${props.source}.edit`}
                        title={'Omezení upravování'}
                        roleLabel={'editRole'}
                        permLabel={'editPermission'}
                    />
                    {props.type === 'type' &&
                        <RestrictInput
                            {...props}
                            source={`${props.source}.delete`}
                            title={'Omezení mazání'}
                            roleLabel={'deleteRole'}
                            permLabel={'deletePermission'}
                        />
                    }
                </>
            }
        </div>
    )
}

export default AuthInput;

const RestrictInput: React.FC<any> = (props) => {

    const { permLabel, roleLabel, ...rest } = props

    const concatChoices = [{ id: 'and', name: 'and' }, { id: 'or', name: 'or' }]

    return (
        <div>
            <Typography color='primary'>
                {props.title}
            </Typography>
            <ArrayInput
                {...rest}
                source={`${props.source}.requiredRole`}
                label={`createType.settings.auth.${roleLabel}`}
            >
                <SimpleFormIterator>
                    <SelectInput source='role' label='createType.settings.auth.roleSelect' />
                    <SelectInput
                        source='concat'
                        label='createType.settings.auth.concat'
                        choices={concatChoices}
                    />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput
                {...rest}
                source={`${props.source}.requiredPermission`}
                label={`createType.settings.auth.${permLabel}`}
            >
                <SimpleFormIterator>
                    <SelectInput source='permission' label='createType.settings.auth.permSelect' />
                    <SelectInput
                        source='concat'
                        label='createType.settings.auth.concat'
                        choices={concatChoices}
                    />
                </SimpleFormIterator>
            </ArrayInput>
        </div>
    )
}