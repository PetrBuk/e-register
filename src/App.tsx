import React from 'react'
import { Admin, Resource as RaResource } from 'react-admin'
import { QueryClient } from 'react-query'
import axios from 'axios'

import userProps from './ra-models/User'
import permissionProps from './ra-models/Permission'
import roleProps from './ra-models/Role'
import possessionSettingsProps from './ra-models/PossessionSettings'

import Dashboard from './ra-customs/Dashboard'
import Resource from './ra-customs/Resource'
import Layout from './ra-customs/Layout'

import dataProvider from './providers/dataProvider'
import authProvider from './providers/authProvider'
import i18nProvider from './providers/I18nProvider'

import './App.css'

import { getCreateComponent, getEditComponent, getListComponent, getShowComponent } from './utils/utils'
import { ledgerResources } from './utils/schemaToModel'

const apiUrl = 'http://localhost:5000/api/'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * 60 * 1000, // 1 minute
    },
  },
})

const staticResources = [
  <Resource {...userProps} />,
  <Resource {...permissionProps} />,
  <Resource {...roleProps} />,
  <Resource {...possessionSettingsProps} />,
  ...ledgerResources
]

const App: React.FC = () => {

  const getPossessionResources = ( permissions: any ) => {
    // ToDo: Check permissions here to fetch correct resources
    return axios.get(apiUrl + 'possessionSettings', {
      headers: {
        //'Access-Control-Expose-Headers': 'Content-Range' // This couses CORS block
      },
      withCredentials: true
    }).then( res => {

      const possessionSettings = res.data.data

      if (possessionSettings.length) {
        const possessionResources = possessionSettings.map((obj: any) => {
          return (
            <RaResource
              key={obj.name}
              name={obj.name}
              options={{ label: obj.displayName }}
              list={getListComponent(obj)}
              show={getShowComponent(obj)}
              edit={getEditComponent(obj)}
              create={getCreateComponent(obj)}
            />
          )
        })
        return [...staticResources, ...possessionResources]
      }
      return staticResources
    }).catch((err) => {
      console.log(err)
      return staticResources
    })
  }

  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      queryClient={queryClient}
      dashboard={Dashboard}
      layout={Layout}
      requireAuth
    >
      {getPossessionResources}
    </Admin>
  )
}

export default App
