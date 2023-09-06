import { Fragment, useState } from "react";
import { MDBPagination, MDBPaginationItem, MDBPaginationLink, MDBIcon } from 'mdb-react-ui-kit';

import GoToTop from "../gototop/goToTop";
import './category.styles.css'


const Starships = ({starshipData}) => {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total number of pages for pagination
    const totalPages = Math.ceil(starshipData.length / itemsPerPage);

    // Slice items based on current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = starshipData.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    
    return (
        <Fragment>
            <br/>
            <h1 className="text-center"> STARSHIPS </h1>
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
                    itemsToDisplay.length > 0 ? itemsToDisplay.map((ship, idx) => {
                        return (
                            <div key={idx} className="d-flex flex-wrap align-items-center align-content-center justify-content-between display-shadow">
                                <div  className="text-center">
                                    <p> <b><u>{ship.name}</u></b> </p>
                                </div>    
                                <div className="text-start">
                                    
                                        <div> Model: {ship.model}</div>
                                        <div> Cost: {ship.cost_in_credits === "unknown" ? "Unknown" : "$" + ship.cost_in_credits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                                        <div> Crew: {ship.crew}</div>
                                        <div> Length: {(ship.length * 3.28084).toFixed(2)} feet</div>
                                   
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

export default Starships;