import React from 'react'
import {useParams, NavLink} from 'react-router-dom'
import {Container, Menu} from 'semantic-ui-react'

function Layout({children}){
  
  const params = useParams();

  return (<Container>
      <Menu>
        <Menu.Item as={NavLink} to="/" name="Home"></Menu.Item>
        <Menu.Item as={NavLink} to="/collections" name="Collections"></Menu.Item>
      </Menu>
    <Container text>{children}</Container>
    {params.id}
  </Container>)
}

export default Layout
