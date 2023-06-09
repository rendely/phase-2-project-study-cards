import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'

function NavBar({ children }) {
  return (
    <Container>
      <Menu>
        <Menu.Item as={NavLink} to="/" name="Home"></Menu.Item>
        <Menu.Item as={NavLink} to="/collections" name="Collections"></Menu.Item>
        <Menu.Item as={NavLink} to="/review" name="Review"></Menu.Item>
        <Menu.Item as={NavLink} to="/search" name="Search All"></Menu.Item>
      </Menu>
      <Container>{children}</Container>
    </Container>)
}

export default NavBar
