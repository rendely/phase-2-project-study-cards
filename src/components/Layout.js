import React from 'react'
import {useParams, NavLink} from 'react-router-dom'

function Layout({children}){
  
  const params = useParams();

  return (<div>
    <div>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/collections" exact>Collections</NavLink>
    </div>
    Hello:
    {children}
    {params.id}
  </div>)
}

export default Layout
