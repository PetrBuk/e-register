import React from 'react'
import {
    Show, ShowProps, SimpleShowLayout, TextField,
    EmailField, BooleanField,
} from 'react-admin'

/*const Actions = ({ basePath, data }: any) => {
    const usersPermission = useUsersPermission();

    return <TopToolbar>
        {usersPermission && <EditButton basePath={basePath} record={data} />}
        {usersPermission && <UserPermissionsPopup record={data} />}
        {usersPermission && data && <DelegatedUsers userId={data.idTK} />}
    </TopToolbar>;
};*/

const UserShow: React.FC<ShowProps> = (props) => {

    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source='name' />
                <EmailField source='email' />
                <BooleanField source='active' />
            </SimpleShowLayout>
        </Show>
    )
}

export default UserShow
