import React from 'react'
import { List, ListProps, Datagrid, TextField } from 'react-admin'

const PermissionList: React.FC<ListProps> = () => {
    return <>
        <List>
            <Datagrid rowClick='show'>
                <TextField source='id' />
                <TextField source='name' />
                <TextField source='description' />
            </Datagrid>
        </List>
    </>
}

export default PermissionList
