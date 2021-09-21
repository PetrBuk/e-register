import React from 'react'
import { SelectInput } from 'react-admin'

const AuthInput: React.FC<any> = (props: any) => {
    return (
        <>
            <SelectInput {...props} source={`${props.source}.base.requiredPermissions`} />
            <SelectInput {...props} source={`${props.source}.base.requiredRoles`} />
            <SelectInput {...props} source={`${props.source}.show.requiredPermissions`} />
            <SelectInput {...props} source={`${props.source}.show.requiredRoles`} />
            <SelectInput {...props} source={`${props.source}.create.requiredPermissions`} />
            <SelectInput {...props} source={`${props.source}.create.requiredRoles`} />
            <SelectInput {...props} source={`${props.source}.edit.requiredPermissions`} />
            <SelectInput {...props} source={`${props.source}.edit.requiredRoles`} />
            {props.type === 'type' && 
            <>
                <SelectInput {...props} source={`${props.source}.delete.requiredPermissions`} />
                <SelectInput {...props} source={`${props.source}.delete.requiredRoles`} />
            </>
            }
        </>
    )
}

export default AuthInput;