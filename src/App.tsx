import React, { useEffect, useState } from 'react'
import { Admin, Resource } from 'react-admin'

import Dashboard from './ra-customs/Dashboard'
import Layout from './ra-customs/Layout'
import customRoutes from './ra-customs/customRoutes'

import dataProvider from './providers/dataProvider'
import authProvider from './providers/authProvider'
import i18nProvider from './providers/I18nProvider'

import { getCreateComponent, getEditComponent, getListComponent, getShowComponent } from './utils/utils'

import './App.css'
import axios from 'axios'

const apiUrl = 'http://localhost:5000/api/'

const App: React.FC = () => {

    const [articleSettings, setArticleSettings] = useState([])

    useEffect(() => {
        axios.get(apiUrl + 'articleSettings', {
            headers: {
                //"Access-Control-Expose-Headers": "Content-Range"
            },
            withCredentials: true
        })
            .then(resp => {
                console.log(resp)
                setArticleSettings(resp.data)
            })
    }, [])

    const resources = articleSettings.map((obj: any) => {
        return (
            <Resource 
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
            dashboard={Dashboard}
            layout={Layout}
            customRoutes={customRoutes}
        >
            <Resource key='articleSettings' name='articleSettings' />
            {resources}
            <Resource key='users' name='users' />
            <Resource key='permissions' name='permissions' />
            <Resource key='roles' name='roles' />
        </Admin>
    );
}

export default App;
