import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';

import { useParams } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";

import GoToTop from '../gototop/goToTop';
import "./episode.styles.css";

const Episode = ({filmData, peopleData}) => {
    const { episodeId } = useParams();

    // Filter through films and retrieve film matching params id.
    const singleEpisode = filmData.filter((film) => {
        
        return film.episode_id  === parseInt(episodeId);
    });

    let episodeCharacters = singleEpisode[0].characters;
    
    //Find vehicles, people, starships, species that match the rendered episode
    // async function fetchEpisodeData () {
    //     try {
    //         for (let i = 0; i < episodeCharacters.length; i++) {
    //             const response = await fetch(`${episodeCharacters[i]}?format=json`)
    //             const translatedData =  await response.json();
    //             episodeCharacters[i] = translatedData;
    //         };
    //         console.log(episodeCharacters)
            
    //     } catch (error) {
    //         console.log('error fetching episode data', error);
    //     };
    // };

    // useEffect(() => {
    //     if (episodeCharacters) {
    //     fetchEpisodeData();
    //     };
    // }, []);

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
            <div className='container shadow'>
                
                <MDBAccordion >
                    <MDBAccordionItem  headerClassName='accHead' bodyClassName='accItem' collapseId={1} headerTitle={<><MDBIcon fas icon="camera" /> &nbsp; Movie Information</>}>
                        <ul>
                            <li> Directed By: {singleEpisode[0].director}</li>
                            <li> Produced By: {singleEpisode[0].producer}</li>
                            <li> Release Date: {singleEpisode[0].release_date}</li>
                        </ul>
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem headerClassName='accHead' bodyClassName='accItem' collapseId={2} headerTitle={<><MDBIcon fas icon="portrait" /> &nbsp; Characters </>}>
                        <ul>
                            {
                                episodeCharacters  ? episodeCharacters.map((character, idx) => {
                                    return (

                                        <li key={idx}> {character}</li>
                                    )
                                }) : <li>No Characters in Movie</li>
                            }
                        </ul>
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem headerClassName='accHead' bodyClassName='accItem' collapseId={3} headerTitle={<><MDBIcon fas icon="globe-americas" /> &nbsp; Planets </>}>
                        <ul>
                            {
                                singleEpisode[0].planets ? singleEpisode[0].planets.map((planet, idx) => {
                                    return (
                                        <li key={idx}> {planet}</li>
                                    )
                                }) : ''
                            }
                        </ul>
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem headerClassName='accHead' bodyClassName='accItem' collapseId={4} headerTitle={<><MDBIcon fas icon="car-alt" /> &nbsp; Vehicles </>}>
                        <ul>
                            {
                                singleEpisode[0].vehicles.length  ? singleEpisode[0].vehicles.map((vehicle, idx) => {
                                    return (
                                        <li key={idx}> {vehicle}</li>
                                    )
                                }) : <li>No Vehicles in Movie</li>
                            }
                        </ul>
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem headerClassName='accHead' bodyClassName='accItem' collapseId={5} headerTitle={<><MDBIcon fas icon="space-shuttle" /> &nbsp; Starships </>}>
                        <ul>
                            {
                                singleEpisode[0].starships  ? singleEpisode[0].starships.map((starship, idx) => {
                                    return (
                                        <li key={idx}> {starship}</li>
                                    )
                                }) : 'No Starships in Movie'
                            }
                        </ul>
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem headerClassName='accHead' bodyClassName='accItem' collapseId={6} headerTitle={<><MDBIcon fas icon="genderless" /> &nbsp; Species </>}>
                        <ul>
                            {
                                singleEpisode[0].species ? singleEpisode[0].species.map((specie, idx) => {
                                    return (
                                        <li key={idx}> {specie}</li>
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