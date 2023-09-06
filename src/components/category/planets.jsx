import { Fragment,  useState } from "react";
import { 
    MDBPagination, 
    MDBPaginationItem, 
    MDBPaginationLink,  
    MDBIcon, 
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter
} from 'mdb-react-ui-kit';

import GoToTop from "../gototop/goToTop";

import './category.styles.css';

const Planets = ({planetsData}) => {

    // Modal useState and basic toggle
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const openModal = (planet) => {
        setSelectedPlanet(planet);
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };


    // Pagination Per Page & useState
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total number of pages for pagination
    const totalPages = Math.ceil(planetsData.length / itemsPerPage);

    // Slice items based on current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = planetsData.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    
    return (
        <Fragment>
            <br/>
            <h1 className="text-center"> Planets </h1>
            <div className="container shadow mt-5">
                {totalPages > 1 && (
                        <MDBPagination center className="p-1 cursor">
                            <MDBPaginationItem disabled={currentPage === 1}>
                                <MDBPaginationLink className="text-success mx-1" aria-label="Previous" onClick={() => handlePageChange(currentPage - 1)}><MDBIcon fas icon="angle-double-left" /></MDBPaginationLink>
                            </MDBPaginationItem>
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <MDBPaginationItem key={index} active={index + 1 === currentPage}>
                                    <MDBPaginationLink className="text-info" onClick={() => handlePageChange(index + 1)}> {index + 1}</MDBPaginationLink>
                                </MDBPaginationItem>
                            ))}
                            <MDBPaginationItem disabled={currentPage === totalPages}>
                                <MDBPaginationLink className="text-success mx-1" aria-label="Next" onClick={() => handlePageChange(currentPage + 1)}><MDBIcon fas icon="angle-double-right" /></MDBPaginationLink>
                            </MDBPaginationItem>
                        </MDBPagination>
                )}
                <div className="row justify-content-center p-5">
                {
                    itemsToDisplay ? itemsToDisplay.map((planet, index) => {
                        return (
                            <div key={planet.name} className="d-flex flex-wrap align-items-center align-content-center justify-content-between col-lg-4 col-md-6 col-sm-6 m-1 display-shadow">
                                <div className="text-center">
                                    <p> <b><u>{planet.name}</u></b> </p>
                                </div>    
                                <div className="text-start">
                                    <MDBBtn size="sm" rounded className="bg-primary text-black" onClick={() => openModal(planet)}>Details</MDBBtn>                                
                                </div>
                            </div>    
                        )
                    }) : 'No Data'
                }
                </div>
                <MDBModal className="text-dark"   show={modalOpen} onHide={closeModal} tabIndex='-1'>
                    <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>{selectedPlanet && selectedPlanet.name.toUpperCase() + " INFORMATION"}</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={closeModal}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody className="bg-black">
                            { selectedPlanet && (
                                <>
                                    <img src='https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg' className="w-25 img" alt="bg"/>
                                    <ul className="float-end text-light">
                                        <li> Population: {selectedPlanet.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</li>
                                        <li> Climate: {selectedPlanet.climate}</li>
                                        <li> Terrain: {selectedPlanet.terrain.includes(',') ? selectedPlanet.terrain.split(',')[0].trim() : selectedPlanet.terrain}</li>
                                        <li> Diameter: {selectedPlanet.diameter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + " meters"}</li>
                                    </ul>
                                    
                                </>)
                            }
                        </MDBModalBody>
                        <MDBModalFooter>
                        {/* <MDBBtn className="btn-close" onClick={closeModal}>
                            Close
                        </MDBBtn> */}
                        </MDBModalFooter>
                    </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </div>
            <GoToTop />
        </Fragment>
    );
};

export default Planets;