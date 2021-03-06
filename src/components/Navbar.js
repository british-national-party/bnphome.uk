import { Link } from 'gatsby'
import React, { useState } from 'react';
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

import logo from '../img/british-national-party.png'

const MainNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
   
    
      <Navbar color="#630a16" dark expand="md" fixed="top">
        <div className="container">
        <Link to="/"><NavbarBrand><div id="logo"> <img class="logo" src={logo} alt="BNP" /></div></NavbarBrand></Link>
      
            
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">News</Link>     
            </NavItem>
            <NavItem>
              <a href="https://forms.bnphome.uk/form-5284536/membership" target="_blank" className="nav-link">Membership</a>
            </NavItem>
            <NavItem>
              <a href="https://forms.bnphome.uk/form-5286789/donation" target="_blank" className="nav-link">Donate</a>
            </NavItem>
            <NavItem>
              <a href="https://forms.bnphome.uk/form-5306742/contact-us" target="_blank" className="nav-link">Contact Us</a>
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
