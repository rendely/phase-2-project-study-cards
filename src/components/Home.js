import React from 'react'
import {Link} from 'react-router-dom'
import Layout from './Layout'

function Home() {
  return (
    <Layout>
      <h1>Study Cards</h1>
      <p>This is an app to let you create and review study cards.</p>
      <p>To get started you can manage your <b><Link to='/collections'>collections</Link></b> or jump straight into <b><Link to='/review/'>reviewing</Link></b> cards.</p>
    </Layout>)
}

export default Home

