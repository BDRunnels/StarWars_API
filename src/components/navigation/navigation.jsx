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
          <MDBNavbarLink href='/films'> <img className='img-thumbnail' src='https://filmartgallery.com/cdn/shop/t/27/assets/star-wars-banner.jpeg?v=80624120874934922901668841836' /> ALL STAR WARS </MDBNavbarLink>
          <MDBCollapse navbar show={showNavNoTogglerThird} bgColor='danger'>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-end '>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/films'>
                    <MDBBtn outline color="white" className='me-2' rippleColor='white' type='button'>
                        FILMS
                    </MDBBtn>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/people'>
                    <MDBBtn outline color="white" className='me-2' rippleColor='white' type='button'>
                        PEOPLE
                    </MDBBtn>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                    <MDBBtn outline color="white" className='me-2' rippleColor='white' type='button'>
                        VEHICLES
                    </MDBBtn>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                    <MDBBtn outline color="white" className='me-2' rippleColor='white' type='button'>
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