import React from 'react'
import { List, ListProps, Datagrid, TextField, BooleanField } from 'react-admin'

/*const UsersFilter = (props: Partial<FilterProps>) => {
    const translate = useTranslate();

    return <Filter {...props}>
        <NullableBooleanInput source="active" alwaysOn />
    </Filter>;
};*/

const UserList: React.FC<ListProps> = (props) => {
    return <>
        <List
            {...props}
            //filters={<UsersFilter />}
            filterDefaultValues={{ active: true }}
            exporter={false}
            bulkActionButtons={false}
        >
            <Datagrid rowClick='show'>
                <TextField source='id' />
                <TextField source='name' />
                <BooleanField source='active' />
            </Datagrid>
        </List>
    </>
}

export default UserList
