import React from 'react'
import { Show, ShowProps, SimpleShowLayout, TextField, ArrayField, Datagrid } from 'react-admin'

/*const Actions = ({ basePath, data }: any) => {
    const usersPermission = useUsersPermission();

    return <TopToolbar>
        {usersPermission && <EditButton basePath={basePath} record={data} />}
        {usersPermission && <UserPermissionsPopup record={data} />}
        {usersPermission && data && <DelegatedUsers userId={data.idTK} />}
    </TopToolbar>;
};*/

// ToDo: this component
const ArticleSettingsShow: React.FC<ShowProps> = (props) => {

    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source='name' />
                <ArrayField source='attributes'>
                    <Datagrid>
                        <TextField source='name' />
                    </Datagrid>
                </ArrayField>
            </SimpleShowLayout>
        </Show>
    )
}

export default ArticleSettingsShow
