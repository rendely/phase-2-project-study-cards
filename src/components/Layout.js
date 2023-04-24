import React from 'react'
import {useParams, NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'

function Layout({children}){
  
  const params = useParams();

  return (<div>
    <div>
      <Menu>
        <Menu.Item as={NavLink} to="/" name="Home"></Menu.Item>
        <Menu.Item as={NavLink} to="/collections" name="Collections"></Menu.Item>
      </Menu>
    </div>
    Hello:
    {children}
    {params.id}
  </div>)
}

export default Layout
