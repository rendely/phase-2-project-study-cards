import React from 'react'
import {useParams} from 'react-router-dom'

function Layout({children}){
  
  const params = useParams();

  return (<div>
    Hello:
    {children}
    {params.id}
  </div>)
}

export default Layout
