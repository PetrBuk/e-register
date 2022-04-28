import React, { ReactElement, ComponentType, Suspense} from 'react';
import { isValidElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ResourceProps, ResourceContextProvider, useTranslate, Loading } from 'react-admin';

interface ResProps {
  create: any,
  edit: any,
  list: any,
  show: any,
  /*createComponent: any,
  editComponent: any,
  listComponent: any,
  showComponent: any*/
  name: string
}

const Resource = (props: ResProps) => {
  const { create: Create, edit: Edit, list: List, name, show: Show,
    /*createComponent: Create, editComponent: Edit, showComponent: Show, listComponent: List*/ } = props;

  return (
    <ResourceContextProvider value={name}>
      <Routes>
        {Create && (
          <Route
            path="create/*"
            element={<Suspense><Create /></Suspense>}
          />
        )}
        {Show && (
          <Route
            path=":id/show/*"
            element={<Suspense><Show /></Suspense>}
          />
        )}
        {Edit && (
          <Route
            path=":id/*"
            element={<Suspense><Edit /></Suspense>}
          />
        )}
        {List && (
          <Route
            path="/*"
            element={<Suspense><List /></Suspense>}
          />
        )}
      </Routes>
    </ResourceContextProvider>
  );
};

Resource.raName = 'Resource';

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
});

export default Resource