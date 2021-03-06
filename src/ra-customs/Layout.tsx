import React from 'react'
import { Layout } from 'react-admin'
import Menu from './Menu'

const MyLayout: React.FC = (props: any) => {
  return (
    <Layout
      {...props}
      menu={Menu}
    />
  )
}

export default MyLayout