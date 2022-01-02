import React, { useState } from 'react'
import {
    useTranslate, ReferenceArrayInput, SelectArrayInput, useGetList,
    ReferenceArrayField, SingleFieldList, ChipField
} from 'react-admin'
import {
    makeStyles, Typography, Accordion,
    AccordionSummary, AccordionDetails
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexFlow: 'column',
        width: '100%'
    },
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridAutoFlow: 'row'
    },
    accordion: {
        flexFlow: 'column'
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
            <Accordion expanded={baseRestriction} onChange={() => setBaseRestriction(!baseRestriction)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    {translate('createType.settings.auth.baseRestrict')}
                </AccordionSummary>
                <AccordionDetails>
                    {baseRestriction && <PermRoleInput
                        {...props}
                        source={`${props.source}.base`}
                    />}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={customRestriction} onChange={() => setCustomRestriction(!customRestriction)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    {translate('createType.settings.auth.customRestrict')}
                </AccordionSummary>
                <AccordionDetails className={classes.accordion}>
                    {customRestriction &&
                        <>
                            <PermRoleInput
                                {...props}
                                title={'Omezení zobrazení'}
                                source={`${props.source}.show`}
                            />
                            {props.type === 'type' &&
                                <PermRoleInput
                                    {...props}
                                    source={`${props.source}.create`}
                                    title={'Omezení vytváření'}
                                />
                            }
                            <PermRoleInput
                                {...props}
                                source={`${props.source}.edit`}
                                title={'Omezení upravování'}
                            />
                            {props.type === 'type' &&
                                <PermRoleInput
                                    {...props}
                                    source={`${props.source}.delete`}
                                    title={'Omezení mazání'}
                                />
                            }
                        </>
                    }
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AuthInput;

const PermRoleInput: React.FC<any> = ({ perm = true, role = true, ...props }) => {

    const classes = useStyles()
    const { permLabel, roleLabel, ...rest } = props

    return (
        <div className={classes.container} >
            {props.title &&
                <Typography color='primary'>
                    {props.title}
                </Typography>}
            <div className={classes.wrapper}>
                {
                    role &&
                    <>
                        <ReferenceArrayInput
                            {...rest}
                            source={`${props.source}.roles.require`}
                            label='createType.settings.auth.requiredRoles'
                            reference='Role'
                        >
                            <SelectArrayInput optionText='name' />
                        </ReferenceArrayInput>
                        <ReferenceArrayInput
                            {...rest}
                            source={`${props.source}.roles.oneOf`}
                            label='createType.settings.auth.oneOfRoles'
                            reference='Role'
                        >
                            <SelectArrayInput optionText='name' />
                        </ReferenceArrayInput>
                    </>
                }{
                    perm &&
                    <>
                        <ReferenceArrayInput
                            {...rest}
                            source={`${props.source}.permissions.require`}
                            label='createType.settings.auth.requiredPermissions'
                            reference='Permission'
                        >
                            <SelectArrayInput optionText='name' />
                        </ReferenceArrayInput>
                        <ReferenceArrayInput
                            {...rest}
                            source={`${props.source}.permissions.oneOf`}
                            label='createType.settings.auth.oneOfPermissions'
                            reference='Permission'
                        >
                            <SelectArrayInput optionText='name' />
                        </ReferenceArrayInput>
                    </>
                }
            </div>
        </div>
    )
}

export const AuthField: React.FC<any> = (props) => {
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
            <Accordion expanded={baseRestriction} onChange={() => setBaseRestriction(!baseRestriction)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    {translate('createType.settings.auth.baseRestrict')}
                </AccordionSummary>
                <AccordionDetails>
                    {baseRestriction && <PermRoleField
                        {...props}
                        source={`${props.source}.base`}
                    />}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={customRestriction} onChange={() => setCustomRestriction(!customRestriction)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    {translate('createType.settings.auth.customRestrict')}
                </AccordionSummary>
                <AccordionDetails className={classes.accordion}>
                    {customRestriction &&
                        <>
                            <PermRoleField
                                {...props}
                                title={'Omezení zobrazení'}
                                source={`${props.source}.show`}
                            />
                            {props.type === 'type' &&
                                <PermRoleField
                                    {...props}
                                    source={`${props.source}.create`}
                                    title={'Omezení vytváření'}
                                />
                            }
                            <PermRoleField
                                {...props}
                                source={`${props.source}.edit`}
                                title={'Omezení upravování'}
                            />
                            {props.type === 'type' &&
                                <PermRoleField
                                    {...props}
                                    source={`${props.source}.delete`}
                                    title={'Omezení mazání'}
                                />
                            }
                        </>
                    }
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

const PermRoleField: React.FC<any> = ({ perm = true, role = true, ...props }) => {

    const classes = useStyles()
    const translate = useTranslate()
    const { ...rest } = props

    return (
        <div className={classes.container} >
            {props.title &&
                <Typography color='primary'>
                    {props.title}
                </Typography>}
            <div className={classes.wrapper}>
                {
                    role &&
                    <>
                        <ReferenceArrayField
                            {...rest}
                            source={`${props.source}.roles.require`}
                            label={translate('createType.settings.auth.requiredRoles')}
                            reference='Role'
                        >
                            <SingleFieldList>
                                <ChipField source="name" />
                            </SingleFieldList>
                        </ReferenceArrayField>
                        <ReferenceArrayField
                            {...rest}
                            source={`${props.source}.roles.oneOf`}
                            label='createType.settings.auth.oneOfRoles'
                            reference='Role'
                        >
                            <SingleFieldList>
                                <ChipField source="name" />
                            </SingleFieldList>
                        </ReferenceArrayField>
                    </>
                }{
                    perm &&
                    <>
                        <ReferenceArrayField
                            {...rest}
                            source={`${props.source}.permissions.require`}
                            label='createType.settings.auth.requiredPermissions'
                            reference='Permission'
                        >
                            <SingleFieldList>
                                <ChipField source="name" />
                            </SingleFieldList>
                        </ReferenceArrayField>
                        <ReferenceArrayField
                            {...rest}
                            source={`${props.source}.permissions.oneOf`}
                            label='createType.settings.auth.oneOfPermissions'
                            reference='Permission'
                        >
                            <SingleFieldList>
                                <ChipField source="name" />
                            </SingleFieldList>
                        </ReferenceArrayField>
                    </>
                }
            </div>
        </div>
    )
}