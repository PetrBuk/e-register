import React from 'react'
import { Show, ShowProps, SimpleShowLayout, TextField } from 'react-admin'

/*const Actions = ({ basePath, data }: any) => {
    const usersPermission = useUsersPermission();

    return <TopToolbar>
        {usersPermission && <EditButton basePath={basePath} record={data} />}
        {usersPermission && <UserPermissionsPopup record={data} />}
        {usersPermission && data && <DelegatedUsers userId={data.idTK} />}
    </TopToolbar>;
};*/

const PermissionShow: React.FC<ShowProps> = (props) => {

    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source='name' />
                <TextField source='description' />
            </SimpleShowLayout>
        </Show>
    )
}

export default PermissionShow
