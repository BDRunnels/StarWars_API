import { Fragment, useState } from "react";
import { MDBPagination, MDBPaginationItem, MDBPaginationLink, MDBIcon } from 'mdb-react-ui-kit';

import GoToTop from "../gototop/goToTop";
import './category.styles.css'

const People = ({peopleData}) => {
    const itemsPerPage = 14;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total number of pages for pagination
    const totalPages = Math.ceil(peopleData.length / itemsPerPage);

    // Slice items based on current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = peopleData.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <Fragment>
            <br/>
            <h1 className="text-center"> PEOPLE</h1>
            <div className="container shadow mt-5">
                {totalPages > 1 && (
                        <MDBPagination center className="p-1 cursor">
                            <MDBPaginationItem disabled={currentPage === 1}>
                                <MDBPaginationLink aria-label="Previous" onClick={() => handlePageChange(currentPage - 1)}><MDBIcon fas icon="angle-double-left" /></MDBPaginationLink>
                            </MDBPaginationItem>
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <MDBPaginationItem key={index} active={index + 1 === currentPage}>
                                    <MDBPaginationLink onClick={() => handlePageChange(index + 1)}> {index + 1}</MDBPaginationLink>
                                </MDBPaginationItem>
                            ))}
                            <MDBPaginationItem disabled={currentPage === totalPages}>
                                <MDBPaginationLink aria-label="Next" onClick={() => handlePageChange(currentPage + 1)}><MDBIcon fas icon="angle-double-right" /></MDBPaginationLink>
                            </MDBPaginationItem>
                        </MDBPagination>
                )}
                <div className="row justify-content-center p-5">
                {
                    itemsToDisplay ? itemsToDisplay.map((person) => {
                        return (
                            <div key={person.name} className="d-flex flex-wrap align-items-center align-content-center justify-content-between col-lg-4 col-md-6 col-sm-6 m-1 display-shadow">
                                <div  className="text-center">
                                    <p> <b><u>{person.name}</u></b> </p>
                                </div>    
                                <div className="text-start">
                                    
                                        <div> Gender: {person.gender === "n/a" || person.gender === "none" ? "Droid" : person.gender}</div>
                                        <div> Height: {person.height === "none" || person.height === "unknown" ? "Unknown" : Math.floor((person.height * .393701) / 12) + " ft"}</div>
                                        <div> Weight: {person.mass === "unknown" ? "Unknown" : (person.mass * 2.2).toFixed(1) + " lbs"} </div>
                                   
                                </div>
                            </div>    
                        )
                    }) : 'No Data'
                }
                </div>
            </div>
            <GoToTop />
        </Fragment>
    );
};

export default People;