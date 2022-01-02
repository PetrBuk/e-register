import React from 'react'
import { Show, ShowProps, SimpleShowLayout, TextField, ArrayField, Datagrid } from 'react-admin'
import { AuthField } from '../../components/AttributesInputs/AuthInput'

/*const Actions = ({ basePath, data }: any) => {
    const usersPermission = useUsersPermission();

    return <TopToolbar>
        {usersPermission && <EditButton basePath={basePath} record={data} />}
        {usersPermission && <UserPermissionsPopup record={data} />}
        {usersPermission && data && <DelegatedUsers userId={data.idTK} />}
    </TopToolbar>;
};*/

const ArticleSettingsShow: React.FC<ShowProps> = (props) => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source='displayName' />
                <ArrayField source='attributes'>
                    <Datagrid>
                        <TextField source='displayName' />
                    </Datagrid>
                </ArrayField>
                <AuthField source='auth' type='type' />
            </SimpleShowLayout>
        </Show>
    )
}

export default ArticleSettingsShow
