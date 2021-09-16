import React from 'react'
import { Admin, Resource } from 'react-admin'

import dataProvider from './providers/dataProvider'
import { getCreateComponent, getEditComponent, getListComponent, getShowComponent } from './utils/utils'

import Dashboard from './ra-customs/Dashboard'
import Layout from './ra-customs/Layout'
import customRoutes from './ra-customs/customRoutes'

import './App.css'

import { typeSettings } from './providers/dummyData'

const App: React.FC = () => {

    const resources = typeSettings.map((obj, key) => {
        return (
            <Resource 
                key={key}
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
            dashboard={Dashboard}
            layout={Layout}
            customRoutes={customRoutes}
        >
            {resources}
        </Admin>
    );
}

export default App;
