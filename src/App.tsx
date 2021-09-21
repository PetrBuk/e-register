import React from 'react'
import { Admin, Resource } from 'react-admin'

import Dashboard from './ra-customs/Dashboard'
import Layout from './ra-customs/Layout'
import customRoutes from './ra-customs/customRoutes'

import dataProvider from './providers/dataProvider'
import authProvider from './providers/authProvider'
import i18nProvider from './providers/I18nProvider'
import { typeSettings } from './providers/dummyData'

import { getCreateComponent, getEditComponent, getListComponent, getShowComponent } from './utils/utils'

import './App.css'

const App: React.FC = () => {

    const resources = typeSettings.map((obj) => {
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

    resources.push(<Resource key='typesSettings' name='typesSettings' />)

    return (
        <Admin
            dataProvider={dataProvider}
            authProvider={authProvider}
            i18nProvider={i18nProvider}
            dashboard={Dashboard}
            layout={Layout}
            customRoutes={customRoutes}
        >
            {resources}
        </Admin>
    );
}

export default App;
