import { Fragment, useState } from "react";

import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';


const Footer = () => {
    const [iconAnimation, setIconAnimation] = useState('')
    return(
        <Fragment>
            <MDBFooter className='text-center mt-5'>
                <MDBContainer className='p-4 shadow-none border-none bg-transparent'>
                    <section className='mb-1'>
                        <MDBBtn color="link" floating className='m-1' href='mailto:bryan.d.runnels@gmail.com' target="_blank" role='button'>
                            <MDBIcon size="2x" fab icon='google' />
                        </MDBBtn>
                        <MDBBtn color="link" floating className='m-1' href='https://www.linkedin.com/in/bryanrunnels/' target="_blank" role='button'>
                            <MDBIcon size="2x" fab icon='linkedin-in' />
                        </MDBBtn>

                        <MDBBtn color="link" floating className='m-1' href='https://github.com/BDRunnels/StarWars_API' target="_blank" role='button'>
                            <MDBIcon size="2x" fab icon='github' />
                        </MDBBtn>
                    </section>
                    <div className='text-center mb-4'>
                        Developed by: Bryan Runnels
                    </div>
                    {/* <section>
                        <MDBBtn outline color="info" floating className='m-1' href='https://react.dev/' target="_blank" role='button' >
                            <MDBIcon size="2x" fab icon="react" />
                        </MDBBtn>
                        <MDBBtn outline color="primary" floating className='m-1' href='https://mdbootstrap.com/' target="_blank" role='button' >
                            <MDBIcon size="2x" fab icon="bootstrap" />
                        </MDBBtn>
                        <MDBBtn outline color="danger" floating className='m-1' href='https://swapi.py4e.com/' target="_blank" role='button' >
                            <MDBIcon size="2x" fas icon="jedi" />
                        </MDBBtn>
                    </section>
                    <div className="text-center mb-4">
                        Powered by: React / MDBootstrap / SWAPI
                    </div> */}
                </MDBContainer>

                
            </MDBFooter>
        </Fragment>
    );
};

export default Footer;
