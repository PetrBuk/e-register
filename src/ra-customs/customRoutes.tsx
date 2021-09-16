import React from 'react'
import { Route } from 'react-router'
import AddType from '../components/AddType'

const customRoutes = [
    <Route exact path='/add-type' component={AddType} />
]

export default customRoutes;