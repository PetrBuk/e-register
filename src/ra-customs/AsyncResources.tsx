import React, { useState, useEffect} from 'react'
import { AdminUI, Resource as RaResource } from 'react-admin'
import axios from 'axios'

import Layout from './Layout'

import { getCreateComponent, getEditComponent, getListComponent, getShowComponent } from '../utils/utils'

const apiUrl = 'http://localhost:5000/api/'

const AsyncResources = () => {

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

  console.log(resources)

  return (
    <AdminUI
      layout={Layout}
      requireAuth
    >
      {resources}
    </AdminUI>
  );
}

export default AsyncResources