import React from 'react'
import UsersIcon from '@material-ui/icons/People'

const LazyCreate = React.lazy(() => import('./Create'))
const LazyEdit = React.lazy(() => import('./Edit'))
const LazyShow = React.lazy(() => import('./Show'))
const LazyList = React.lazy(() => import('./List'))

const roleProps = {
    name: 'Role',
    icon: UsersIcon,
    list: LazyList,
    show: LazyShow,
    create: LazyCreate,
    edit: LazyEdit
}

export default roleProps