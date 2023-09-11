import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
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

// OLD IMPORTS TO RENDER PAGES
// import Vehicles from "./vehicles";
// import Species from "./species";
// import People from "./people";
// import Starships from "./starships";
// import Planets from "./planets";

const Category = (props) => {

    // Grabbing :category from useParams
    const { categoryURL } = useParams();
    // Destructuring props
    const { peopleData, vehicleData, speciesData, starshipData, planetsData } = props;
    // useState to set the category from useParams
    const [category, setCategory] = useState([]);
    // useEffect switch statement to change data based on useParams on mount. Watching for changes to 'category'.
    useEffect(() => {
        switch(categoryURL) {
            case "people":
                setCategory(peopleData);
                break;
            case "vehicles":
                setCategory(vehicleData);
                break;
            case "species":
                setCategory(speciesData);
                break;
            case "starships":
                setCategory(starshipData);
                break;
            case "planets":
                setCategory(planetsData);
                break;
            default:
                <h1 className="text-center d-flex justify-content-center"> 404: Page Not Found </h1>
        };
        setCurrentPage(1)
    }, [categoryURL, peopleData, vehicleData, speciesData, starshipData, planetsData]);
    

    // Modal useState and basic toggle
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const openModal = (categoryItem) => {
        setSelectedCategory(categoryItem);
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };


    // Pagination Per Page & useState
    
    let itemsPerPage = 10
    if (categoryURL === "people") itemsPerPage = 15
    
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total number of pages for pagination
    const totalPages = Math.ceil(category.length / itemsPerPage);

    // Slice items based on current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = category.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Switch to set categoryURL 
    const getCategoryName = (categoryURL) => {
        switch (categoryURL) {
            case "people":
                return "People";
            case "vehicles":
                return "Vehicles";
            case "planets":
                return "Planets";
            case "starships":
                return "Starships";
            case "species":
                return "Species";
            default:
                return "";
        };
    };

    return(
        <Fragment>
            <br/>
            <h1 className="text-center"> {getCategoryName(categoryURL)}</h1>
            <div className="container shadow-category mt-5">
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
                    itemsToDisplay ? itemsToDisplay.map((categoryItem, index) => {
                        return (
                            <div key={index} className="d-flex flex-column flex-wrap align-items-center align-content-center justify-content-between col-lg-4 col-md-6 col-sm-6 m-1 display-shadow p-1">
                                {/* { window.innerWidth <= 768 && (
                                
                                )} */}
                                <div className="text-center">
                                    <p> <b><u>{categoryItem.name}</u></b> </p>
                                </div>    
                                <div className="text-start">
                                    <MDBBtn size="sm" rounded className="bg-primary text-black" onClick={() => openModal(categoryItem)}>Details</MDBBtn>                                
                                </div>
                                {/* { window.innerWidth > 768 && (
                                    <div className="text-center">
                                        <p> <b><u>{categoryItem.name}</u></b> </p>
                                    </div>
                                )} */}
                                
                            </div>    
                        )
                    }) : 'No Data'
                }
                </div>
                <MDBModal className="text-dark"   show={modalOpen} onHide={closeModal} tabIndex='-1'>
                    <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>{selectedCategory && selectedCategory.name.toUpperCase() + " INFORMATION"}</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={closeModal}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody className="bg-black border">
                            { 
                                selectedCategory && categoryURL === "planets" && (
                                    <Fragment>
                                        <img src='https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg' className="w-25 img" alt="bg"/>
                                        <ul className="float-end text-light">
                                            <li> Population: {selectedCategory.population ? selectedCategory.population.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : "Loading..."}</li>
                                            <li> Climate: {selectedCategory.climate || "Loading..."}</li>
                                            <li> Terrain: {selectedCategory.terrain ?  selectedCategory.terrain.includes(',') ? selectedCategory.terrain.split(',')[0].trim() : selectedCategory.terrain : "Loading..."}</li>
                                            <li> Diameter: {selectedCategory.diameter ?  selectedCategory.diameter.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + " meters" : "Loading..."}</li>
                                        </ul>                                       
                                    </Fragment>)
                            }
                            {
                                selectedCategory && categoryURL === "people" && (
                                    <Fragment>
                                        <img src='https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg' className="w-25 img" alt="bg"/>
                                        <ul className="float-end text-light">
                                            <li> Gender: {selectedCategory.gender === "n/a" || selectedCategory.gender === "none" ? "Droid" : selectedCategory.gender}</li>
                                            <li> Height: {selectedCategory.height === "none" || selectedCategory.height === "unknown" ? "Unknown" : Math.floor((selectedCategory.height * .393701) / 12) + " ft"}</li>
                                            <li> Weight: {selectedCategory.mass === "unknown" ? "Unknown" : (selectedCategory.mass * 2.2).toFixed(1) + " lbs"} </li>
                                        </ul>                                        
                                    </Fragment>
                                )
                            }
                            {
                                selectedCategory && categoryURL === "vehicles" && (
                                    <Fragment>
                                        <img src='https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg' className="w-25 img" alt="bg"/>
                                        <ul className="float-end text-light">
                                            <li> Class: {selectedCategory.vehicle_class}</li>
                                            <li> Max Speed: {selectedCategory.max_atmosphering_speed} mph</li>
                                            <li> Crew: {selectedCategory.crew}</li>
                                            <li> Length: {(selectedCategory.length * 3.28084).toFixed(2)} feet</li>
                                        </ul>                                        
                                    </Fragment>
                                )
                            }
                            {
                                selectedCategory && categoryURL === "starships" && (
                                    <Fragment>
                                        <img src='https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg' className="w-25 img" alt="bg"/>
                                        <ul className="float-end text-light">
                                            <li> Model: {selectedCategory.model}</li>
                                            <li> Cost: {selectedCategory.cost_in_credits ? selectedCategory.cost_in_credits === "unknown" ? "Unknown" : "$" + selectedCategory.cost_in_credits.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : "Loading..."}</li>
                                            <li> Crew: {selectedCategory.crew}</li>
                                            <li> Length: {(selectedCategory.length * 3.28084).toFixed(2)} feet</li>
                                        </ul>
                                    </Fragment>
                                )
                            }
                            {
                                selectedCategory && categoryURL === "species" && (
                                    <Fragment>
                                        <img src='https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg' className="w-25 img" alt="bg"/>
                                        <ul className="float-end text-light">
                                                {/* <div> selectedCategory: {selectedCategory.classification}</div> */}
                                            <li> Language: {selectedCategory.language === "unknown" ? "Unknown" : selectedCategory.language}</li>
                                            <li> Avg Height: {selectedCategory.average_height === "none" || selectedCategory.average_height === "unknown" || selectedCategory.average_height === "n/a" ? "Unknown" : Math.floor((selectedCategory.average_height * .393701) / 12) + " ft"} </li>
                                            <li> Avg Lifespan: {selectedCategory.average_lifespan === "unknown" ? "Unknown" : selectedCategory.average_lifespan + " years"}</li>
                                        </ul>
                                    </Fragment>
                                )
                            }
                        </MDBModalBody>
                        {/* <MDBModalFooter className="bg-black"> */}
                        {/* <MDBBtn className="btn-close" onClick={closeModal}>
                            Close
                        </MDBBtn> */}
                        {/* </MDBModalFooter> */}
                    </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </div>
            <GoToTop />
        </Fragment>
    )
};

export default Category;