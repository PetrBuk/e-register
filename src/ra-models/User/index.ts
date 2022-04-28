import React from 'react'
import UsersIcon from '@mui/icons-material/People'

import Create from './Create'
import Edit from './Edit'
import List from './List'
import Show from './Show'

const LazyCreate = React.lazy(() => import('./Create'))
const LazyEdit = React.lazy(() => import('./Edit'))
const LazyShow = React.lazy(() => import('./Show'))
const LazyList = React.lazy(() => import('./List'))

const userProps = {
    name: 'User',
    icon: UsersIcon,
    list: LazyList,
    show: LazyShow,
    create: LazyCreate,
    edit: LazyEdit
}
/*
const userProps = {
    name: 'User',
    icon: UsersIcon,
    list: true,
    show: true,
    create: true,
    edit: true,
    listComponent: LazyList,
    showComponent: LazyShow,
    createComponent: LazyCreate,
    editComponent: LazyEdit
}*/

export default userProps