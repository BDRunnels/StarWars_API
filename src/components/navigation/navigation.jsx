import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
  MDBInputGroup
} from 'mdb-react-ui-kit';

const Navigation = () => {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);

  // Button 1
  const handleHover1 = () => {
    setHovered1(true);
  };

  const handleUnhover1 = () => {
    setHovered1(false);
  };

  // Button 2
  const handleHover2 = () => {
    setHovered2(true);
  };

  const handleUnhover2 = () => {
    setHovered2(false);
  };

  // Button 1
  const handleHover3 = () => {
    setHovered3(true);
  };

  const handleUnhover3 = () => {
    setHovered3(false);
  };

  // Button 1
  const handleHover4 = () => {
    setHovered4(true);
  };

  const handleUnhover4 = () => {
    setHovered4(false);
  };

  const buttonStyle1 = {
    backgroundColor: hovered1 ? 'white' : '',
    color: hovered1 ? 'black' : 'white',
    borderColor: hovered1 ? 'black' : 'white'
  };

  const buttonStyle2 = {
    backgroundColor: hovered2 ? 'white' : '',
    color: hovered2 ? 'black' : 'white',
    borderColor: hovered2 ? 'black' : 'white'
  };

  const buttonStyle3 = {
    backgroundColor: hovered3 ? 'white' : '',
    color: hovered3 ? 'black' : 'white',
    borderColor: hovered3 ? 'black' : 'white'
  };

  const buttonStyle4 = {
    backgroundColor: hovered4 ? 'white' : '',
    color: hovered4 ? 'black' : 'white',
    borderColor: hovered4 ? 'black' : 'white'
  };


  return (
    <>
      <MDBNavbar expand='md' light bgColor='black' className='navbar-dark' 
      style={{
        'borderBottom': 'white 1px solid',
        'position': 'fixed',
        'top': '0',
        'zIndex': '999',
        'width': '100vw'
      }}>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon='bars' fas  />
          </MDBNavbarToggler>
          <MDBNavbarLink href='/'> <img className='img-thumbnail' src='https://filmartgallery.com/cdn/shop/t/27/assets/star-wars-banner.jpeg?v=80624120874934922901668841836' /> HOME </MDBNavbarLink>
          <MDBCollapse navbar show={showNavNoTogglerThird} >
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-end '>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/species'>
                    <MDBBtn  outline color='white' onMouseEnter={handleHover1} onMouseLeave={handleUnhover1} style={buttonStyle1} type='button'>
                        SPECIES
                    </MDBBtn>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/people'>
                <MDBBtn  outline color='white' onMouseEnter={handleHover2} onMouseLeave={handleUnhover2} style={buttonStyle2} type='button'>
                        PEOPLE
                    </MDBBtn>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/vehicles'>
                <MDBBtn  outline color='white' onMouseEnter={handleHover3} onMouseLeave={handleUnhover3} style={buttonStyle3} type='button'>
                        VEHICLES
                    </MDBBtn>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/starships'>
                <MDBBtn  outline color='white' onMouseEnter={handleHover4} onMouseLeave={handleUnhover4} style={buttonStyle4} type='button'>
                        STARSHIPS
                    </MDBBtn>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Navigation;