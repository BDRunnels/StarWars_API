import { Fragment, useState } from "react";
import { MDBPagination, MDBPaginationItem, MDBPaginationLink, MDBIcon } from 'mdb-react-ui-kit';

import GoToTop from "../gototop/goToTop";
import './category.styles.css'

const Species = ({speciesData}) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total number of pages for pagination
    const totalPages = Math.ceil(speciesData.length / itemsPerPage);

    // Slice items based on current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = speciesData.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    
    return (
        <Fragment>
            <br/>
            <h1 className="text-center"> SPECIES </h1>
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
                    itemsToDisplay ? itemsToDisplay.map((type) => {
                        return (
                            <div key={type.name} className="d-flex flex-wrap align-items-center align-content-center justify-content-between col-lg-4 col-md-6 col-sm-6 m-1 display-shadow">
                                <div className="text-center">
                                    <p> <b><u>{type.name}</u></b> </p>
                                </div>    
                                <div className="text-start">
                                    
                                        {/* <div> Type: {type.classification}</div> */}
                                        <div> Language: {type.language === "unknown" ? "Unknown" : type.language}</div>
                                        <div> Avg Height: {type.average_height === "none" || type.average_height === "unknown" || type.average_height === "n/a" ? "Unknown" : Math.floor((type.average_height * .393701) / 12) + " ft"} </div>
                                        <div> Avg Lifespan: {type.average_lifespan === "unknown" ? "Unknown" : type.average_lifespan + " years"}</div>
                                   
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

export default Species;