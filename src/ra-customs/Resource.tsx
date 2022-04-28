import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ResourceProps, ResourceContextProvider, Loading } from 'react-admin'

interface ResProps {
  create: any,
  edit: any,
  list: any,
  show: any,
  name: string
}

const Resource = (props: ResProps) => {
  const { create: Create, edit: Edit, list: List, name, show: Show } = props

  return (
    <ResourceContextProvider value={name}>
      <Routes>
        {Create && (
          <Route
            path="create/*"
            element={<Suspense fallback={<Loading />}><Create /></Suspense>}
          />
        )}
        {Show && (
          <Route
            path=":id/show/*"
            element={<Suspense fallback={<Loading />}><Show /></Suspense>}
          />
        )}
        {Edit && (
          <Route
            path=":id/*"
            element={<Suspense fallback={<Loading />}><Edit /></Suspense>}
          />
        )}
        {List && (
          <Route
            path="/*"
            element={<Suspense fallback={<Loading />}><List /></Suspense>}
          />
        )}
      </Routes>
    </ResourceContextProvider>
  )
}

Resource.raName = 'Resource'

Resource.registerResource = ({
  create,
  edit,
  icon,
  list,
  name,
  options,
  show,
}: ResourceProps) => ({
  name,
  options,
  hasList: !!list,
  hasCreate: !!create,
  hasEdit: !!edit,
  hasShow: !!show,
  icon,
})

export default Resource