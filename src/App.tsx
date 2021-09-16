import React from 'react'
import { Admin, Resource } from 'react-admin'

import dataProvider from './providers/dataProvider'
import { getCreateComponent, getEditComponent, getListComponent, getShowComponent } from './utils/utils'

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
        >
            {resources}
        </Admin>
    );
}

export default App;
