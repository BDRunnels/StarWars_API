import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';

import { useParams } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";

import GoToTop from '../gototop/goToTop';
import "./episode.styles.css";

const Episode = ({filmData, peopleData, speciesData, starshipData, vehicleData, planetsData}) => {
    const { episodeId } = useParams();

    // Filter through films and retrieve film matching params id.
    const singleEpisode = filmData.filter((film) => {
        
        return film.episode_id  === parseInt(episodeId);
    });

    // Assigning variable to each film characters
    let episodeCharacters = singleEpisode[0].characters;
    

    return (
        <Fragment>
            <br/>
            <h1 className='text-center'> {singleEpisode[0].title}</h1>
            <div className='container episode-container mt-3 col-md-8'> 
                    <div className='row justify-content-center'>
                        <div className='col-md-8 scrolling-text text-wrap'>
                            
                            <p>"{singleEpisode[0].opening_crawl}"</p>
                        </div>    
                    </div>
            </div>
            <div className='container border-none shadow bg-black'>
                <MDBAccordion>
                    <MDBAccordionItem headerClassName='accHead' bodyClassName='accItem' collapseId={1} headerTitle={<><MDBIcon fas icon="camera" /> &nbsp; Movie Information</>}>
                        <ul className="text-wrap">
                            <li> Directed By: {singleEpisode[0].director}</li>
                            <li> Produced By: {singleEpisode[0].producer}</li>
                            <li> Release Date: {singleEpisode[0].release_date}</li>
                        </ul>
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem headerClassName='accHead' bodyClassName='accItem' collapseId={2} headerTitle={<><MDBIcon fas icon="portrait" /> &nbsp; Characters </>}>
                        <ul className='cursor'>
                            {
                                episodeCharacters  ? episodeCharacters.map((character, idx) => {
                                    const indCharacter = peopleData.find((person) => person.url === character);
                                    return (

                                        <li key={idx}> {indCharacter ? indCharacter.name : "Character not found."}</li>
                                    )
                                }) : <div>No Characters in Movie</div>
                            }
                        </ul>
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem headerClassName='accHead' bodyClassName='accItem' collapseId={3} headerTitle={<><MDBIcon fas icon="globe-americas" /> &nbsp; Planets </>}>
                        <ul className='cursor'>
                            {
                                singleEpisode[0].planets ? singleEpisode[0].planets.map((planet, idx) => {
                                    const indPlanet = planetsData.find((item) => item.url === planet);
                                    return (
                                        <li key={idx}> {indPlanet ? indPlanet.name : "Planet not found."}</li>
                                    )
                                }) : ''
                            }
                        </ul>
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem headerClassName='accHead' bodyClassName='accItem' collapseId={4} headerTitle={<><MDBIcon fas icon="car-alt" /> &nbsp; Vehicles </>}>
                        <ul className='cursor'>
                            {
                                singleEpisode[0].vehicles.length  ? singleEpisode[0].vehicles.map((vehicle, idx) => {
                                    const indVehicle = vehicleData.find((item) => item.url === vehicle);
                                    return (
                                        <li key={idx}> {indVehicle ? indVehicle.name : "Vehicle not found."}</li>
                                    )
                                }) : <li>No Vehicles in Movie</li>
                            }
                        </ul>
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem headerClassName='accHead' bodyClassName='accItem' collapseId={5} headerTitle={<><MDBIcon fas icon="space-shuttle" /> &nbsp; Starships </>}>
                        <ul className='cursor'>
                            {
                                singleEpisode[0].starships  ? singleEpisode[0].starships.map((starship, idx) => {
                                    const indShip = starshipData.find((item) => item.url === starship);
                                    return (
                                        <li key={idx}> {indShip ? indShip.name : "Starship not found."}</li>
                                    )
                                }) : 'No Starships in Movie'
                            }
                        </ul>
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem headerClassName='accHead' bodyClassName='accItem' collapseId={6} headerTitle={<><MDBIcon fas icon="genderless" /> &nbsp; Species </>}>
                        <ul className='cursor'>
                            {
                                singleEpisode[0].species ? singleEpisode[0].species.map((specie, idx) => {
                                    const indSpecies = speciesData.find((item) => item.url === specie);
                                    return (
                                        <li key={idx}> {indSpecies ? indSpecies.name : "Not found."}</li>
                                    )
                                }) : 'No Species in Movie'
                            }
                        </ul>
                    </MDBAccordionItem>
                </MDBAccordion>
            </div>
            <GoToTop />    
        </Fragment>
    );
};

export default Episode;