import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';

import { useParams } from "react-router-dom";
import { Fragment } from "react";

import "./episode.styles.css";

const Episode = ({filmData, peopleData}) => {
    const { episodeId } = useParams();

    // Filter through films and retrieve film matching params id.
    const singleEpisode = filmData.filter((film) => {
        
        return film.episode_id  === parseInt(episodeId);
    });

    // Find characters that match the rendered episode


    console.log(singleEpisode[0])    

    return (
        <Fragment>
            <h1 className='text-center'> {singleEpisode[0].title}</h1>
            <div className='container episode-container'> 
                
                <h6> Screen Crawl </h6>
                <span>"{singleEpisode[0].opening_crawl}"</span>
            </div>
            <div className='container'>
                
                <MDBAccordion >
                    <br/>
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
                                singleEpisode[0].characters && peopleData ? singleEpisode[0].characters.map((character) => {
                                    return (
                                        <li> {character}</li>
                                    )
                                }) : 'No Characters in Movie'
                            }
                        </ul>
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem headerClassName='accHead' bodyClassName='accItem' collapseId={3} headerTitle={<><MDBIcon fas icon="globe-americas" /> &nbsp; Planets </>}>
                        <ul>
                            {
                                singleEpisode[0].planets ? singleEpisode[0].planets.map((planet) => {
                                    return (
                                        <li> {planet}</li>
                                    )
                                }) : 'No Planets in Movie'
                            }
                        </ul>
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem headerClassName='accHead' bodyClassName='accItem' collapseId={4} headerTitle={<><MDBIcon fas icon="car-alt" /> &nbsp; Vehicles </>}>
                        <ul>
                            {
                                singleEpisode[0].vehicles  ? singleEpisode[0].vehicles.map((vehicle) => {
                                    return (
                                        <li> {vehicle}</li>
                                    )
                                }) : 'No Vehicles in Movie'
                            }
                        </ul>
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem headerClassName='accHead' bodyClassName='accItem' collapseId={5} headerTitle={<><MDBIcon fas icon="space-shuttle" /> &nbsp; Starships </>}>
                        <ul>
                            {
                                singleEpisode[0].starships  ? singleEpisode[0].starships.map((starship) => {
                                    return (
                                        <li> {starship}</li>
                                    )
                                }) : 'No Starships in Movie'
                            }
                        </ul>
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem headerClassName='accHead' bodyClassName='accItem' collapseId={6} headerTitle={<><MDBIcon fas icon="genderless" /> &nbsp; Species </>}>
                        <ul>
                            {
                                singleEpisode[0].species ? singleEpisode[0].species.map((specie) => {
                                    return (
                                        <li> {specie}</li>
                                    )
                                }) : 'No Species in Movie'
                            }
                        </ul>
                    </MDBAccordionItem>
                </MDBAccordion>
            </div>    
        </Fragment>
    );
};

export default Episode;