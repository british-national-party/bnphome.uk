import React from 'react'
import Helmet from 'react-helmet'
import MainNavBar from './Navbar'
import Footer from './Footer'
import '../styles/index.scss'

const TemplateWrapper = ({ children }) => (
  <div div className="main-body">
    <Helmet title="HOME | British National Party" />      
      
    <MainNavBar />
    <div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>    
    </div>
    <div>{children}</div>
    <div><Footer></Footer></div>
    
  </div>
)

export default TemplateWrapper