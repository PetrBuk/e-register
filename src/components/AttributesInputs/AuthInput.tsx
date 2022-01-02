import React, { useState } from 'react'
import { useTranslate, ReferenceArrayInput, SelectArrayInput, useGetList } from 'react-admin'
import { FormControlLabel, makeStyles, Switch, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexFlow: 'column'
    },
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridAutoFlow: 'row'
    }
})

const AuthInput: React.FC<any> = (props: any) => {

    const [baseRestriction, setBaseRestriction] = useState(false)
    const [customRestriction, setCustomRestriction] = useState(false)

    const translate = useTranslate()
    const classes = useStyles()

    //To prevent 30 Reguest for rendering 30 Reference many inputs fetch the data with validUntil date
    const permissions = useGetList('Permission')
    const roles = useGetList('Role')

    if (!permissions.loaded && !roles.loaded) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <div className={classes.container}>
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

    const classes = useStyles()
    const { permLabel, roleLabel, ...rest } = props

    return (
        <div>
            <Typography color='primary'>
                {props.title}
            </Typography>
            <div className={classes.wrapper}>
                <ReferenceArrayInput
                    {...rest}
                    source={`${props.source}.roles.requiredRoles`}
                    label='createType.settings.auth.requiredRoles'
                    reference='Role'
                >
                    <SelectArrayInput optionText='name' />
                </ReferenceArrayInput>
                <ReferenceArrayInput
                    {...rest}
                    source={`${props.source}.roles.oneOfRoles`}
                    label='createType.settings.auth.oneOfRoles'

                    reference='Role'
                >
                    <SelectArrayInput optionText='name' />
                </ReferenceArrayInput>
                <ReferenceArrayInput
                    {...rest}
                    source={`${props.source}.permissions.requiredPermissions`}
                    label='createType.settings.auth.requiredPermissions'

                    reference='Permission'
                >
                    <SelectArrayInput optionText='name' />
                </ReferenceArrayInput>
                <ReferenceArrayInput
                    {...rest}
                    source={`${props.source}.permissions.oneOfPermissions`}
                    label='createType.settings.auth.oneOfPermissions'

                    reference='Permission'
                >
                    <SelectArrayInput optionText='name' />
                </ReferenceArrayInput>
            </div>
        </div>
    )
}

//ToDo: this
export const AuthField: React.FC<any> = () => {
    return(
        <>

        </>
    )
}