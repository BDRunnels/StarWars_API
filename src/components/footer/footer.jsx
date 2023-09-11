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
            <MDBFooter className='bg-none text-center text-white mt-5'>
                <MDBContainer className='p-4 shadow-none border-none bg-black'>
                    <section className='mb-1'>
                        <MDBBtn color="link" floating className='m-1' href='mailto:bryan.d.runnels@gmail.com' target="_blank" role='button'>
                            <MDBIcon size="2x" fab icon='google' />
                        </MDBBtn>
                        <MDBBtn color="link" floating className='m-1' href='https://www.linkedin.com/in/bryanrunnels/' target="_blank" role='button'>
                            <MDBIcon size="2x" fab icon='linkedin-in' />
                        </MDBBtn>

                        <MDBBtn color="link" floating className='m-1' href='https://github.com/BDRunnels' target="_blank" role='button'>
                            <MDBIcon size="2x" fab icon='github' />
                        </MDBBtn>
                    </section>
                    <div className='text-center mb-1'>
                        Developed by:
                        <a className='text-white' href='https://github.com/BDRunnels'>
                            {" Bryan Runnels"}
                        </a>
                    </div>
                    <MDBBtn color="link" floating className='m-1' href='https://swapi.py4e.com/' target="_blank" role='button' >
                        <MDBIcon size="2x" fas icon="jedi" />
                    </MDBBtn>
                    <div className='text-center mb-4'>
                        Powered by:
                        <a className='text-white' href='https://github.com/BDRunnels'>
                            {" SWAPI"}
                        </a>
                    </div>
                </MDBContainer>

                
            </MDBFooter>
        </Fragment>
    );
};

export default Footer;
