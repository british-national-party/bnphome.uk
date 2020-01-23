import { Link } from 'gatsby'
import React, { useState, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Media from 'react-media';
import logo from '../img/british-national-party.png'

const MainNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
   
    
      <Navbar color="#630a16" dark expand="md" fixed="top">
        <div className="container">
      <div>
      
        <Media queries={{
            small: "(max-width: 599px)",
            large: "(min-width: 600px)"
          }}>
            {matches => (
              <Fragment>
                {matches.small && 
                
                  <NavbarBrand><div id="logo"> <img class="logo" src={logo} alt="BNP" style={{ width: '200px' }} /></div></NavbarBrand>
                  
                }              
             
                {matches.large && 
              
                  <NavbarBrand><div id="logo"> <img class="logo" src={logo} alt="BNP" style={{ width: '350px' }} /></div></NavbarBrand>
                  
                }
            
              </Fragment>
          )}
        </Media>
        
      </div>
      
            
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">News</Link>     
            </NavItem>
            
            <UncontrolledDropdown dark nav inNavbar>
              <DropdownToggle nav caret>
                About Us
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/introduction" className="dropdown-item">Introduction</Link>
                </DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>
                  <Link to="/policy-animal-welfare" className="dropdown-item">Animal welfare</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/policy-british-culture" className="dropdown-item">British culture</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/policy-defence" className="dropdown-item">Defence</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/policy-democracy" className="dropdown-item">Democracy</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/policy-education" className="dropdown-item">Education</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/policy-energy" className="dropdown-item">Energy</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/policy-health" className="dropdown-item">Health</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/policy-housing" className="dropdown-item">Housing</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/policy-immigration" className="dropdown-item">Immigration</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/policy-law-and-order" className="dropdown-item">Law and order</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/policy-reversing-islamisation" className="dropdown-item">Islamisation</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/policy-senior-citizens" className="dropdown-item">Senior Citizens</Link>
                </DropdownItem>
              
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
        </Collapse>
        </div>
      </Navbar>
  );
}

export default MainNavBar;
