import React from 'react'
import {useParams, NavLink} from 'react-router-dom'
import {Container, Menu} from 'semantic-ui-react'

function Layout({children, collectionName}){
  console.log(collectionName);
  const params = useParams();

  return (<Container>
      <Menu>
        <Menu.Item as={NavLink} to="/" name="Home"></Menu.Item>
        <Menu.Item as={NavLink} to="/collections" name="Collections"></Menu.Item>
        {params.id ? <Menu.Item as={NavLink} to={`/collections/${params.id}`} name={collectionName}></Menu.Item> : null}
      </Menu>
    <Container text>{children}</Container>
  </Container>)
}

export default Layout
