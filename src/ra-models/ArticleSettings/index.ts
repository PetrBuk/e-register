import React from 'react'
import UsersIcon from '@material-ui/icons/Settings'

const LazyCreate = React.lazy(() => import('./Create'))
const LazyEdit = React.lazy(() => import('./Edit'))
const LazyShow = React.lazy(() => import('./Show'))
const LazyList = React.lazy(() => import('./List'))

const articleSettingsProps = {
    name: 'ArticleSettings',
    icon: UsersIcon,
    list: LazyList,
    show: LazyShow,
    create: LazyCreate,
    edit: LazyEdit
}

export default articleSettingsProps