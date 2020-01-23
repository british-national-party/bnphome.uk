import React from 'react'
import Helmet from 'react-helmet'
import MainNavBar from './Navbar'
import '../styles/index.scss'

const TemplateWrapper = ({ children }) => (
  <div div className="main-body">
    <Helmet title="HOME | British National Party" />      
    
   
    <MainNavBar />
    <div>
      <p>&lt;</p>
      <p>&lt;</p>   
    </div>
    <div>{children}</div>
    
  </div>
)

export default TemplateWrapper