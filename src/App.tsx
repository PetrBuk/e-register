import React, { useEffect, useState } from 'react'
import { Admin, Resource as RaResource } from 'react-admin'
import { QueryClient } from 'react-query'
import axios from 'axios'

import userProps from './ra-models/User'
import permissionProps from './ra-models/Permission'
import roleProps from './ra-models/Role'
import typeSettingsProps from './ra-models/ArticleSettings'

import Dashboard from './ra-customs/Dashboard'
import Resource from './ra-customs/Resource_v4'
import Layout from './ra-customs/Layout'

import dataProvider from './providers/dataProvider'
import authProvider from './providers/authProvider'
import i18nProvider from './providers/I18nProvider'

import './App.css'

import { getCreateComponent, getEditComponent, getListComponent, getShowComponent } from './utils/utils'

const apiUrl = 'http://localhost:5000/api/'

const App: React.FC = () => {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1 * 60 * 1000, // 1 minute
            },
        },
    });

    const [articleSettings, setArticleSettings] = useState([])

    useEffect(() => {
        axios.get(apiUrl + 'possessionSettings', {
            headers: {
                //"Access-Control-Expose-Headers": "Content-Range"
            },
            withCredentials: true
        })
            .then(resp => {
                console.log(resp)
                setArticleSettings(resp.data.data)
            })
    }, [])

    const resources = articleSettings.map((obj: any) => {
        return (
            <RaResource
                key={obj.name}
                name={obj.name}
                list={getListComponent(obj)}
                show={getShowComponent(obj)}
                edit={getEditComponent(obj)}
                create={getCreateComponent(obj)}
            />
        )
    })

    return (
        <Admin
            dataProvider={dataProvider}
            authProvider={authProvider}
            i18nProvider={i18nProvider}
            queryClient={queryClient}
            dashboard={Dashboard}
            layout={Layout}
        >
            {resources}
            <Resource {...userProps} />
            <Resource {...permissionProps} />
            <Resource {...roleProps} />
            <Resource {...typeSettingsProps} />
        </Admin>
    );
}

export default App;
