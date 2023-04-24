import React from 'react'
import {useParams, NavLink} from 'react-router-dom'
import {Container, Menu} from 'semantic-ui-react'

function Layout({children, collectionName}){
  return (<Container>
      <Menu>
        <Menu.Item as={NavLink} to="/" name="Home"></Menu.Item>
        <Menu.Item as={NavLink} to="/collections" name="Collections"></Menu.Item>
        {collectionName ? <Menu.Item as={NavLink} to="#" name={collectionName}></Menu.Item> : null}
        <Menu.Item as={NavLink} to="/review" name="Review"></Menu.Item>
      </Menu>
    <Container>{children}</Container>
  </Container>)
}

export default Layout
