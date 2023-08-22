import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';

import { useParams } from "react-router-dom";
import { Fragment } from "react";

import "./episode.styles.css";

const Episode = ({filmData}) => {
    const { episodeId } = useParams();

    const singleEpisode = filmData.filter((film) => {
        
        return film.episode_id  === parseInt(episodeId);
    });

    console.log(singleEpisode[0])
    return (
        <Fragment>
            <h1 className='text-center'> {singleEpisode[0].title}</h1>
            <p className='text-center container'> {singleEpisode[0].opening_crawl}</p>
            <div className='container'>
                
                <MDBAccordion >
                    <br/>
                    <MDBAccordionItem collapseId={1} headerTitle={<><MDBIcon fas icon="camera" /> &nbsp; Movie Information</>}>
                        <ul>
                            <li> Directed By: {singleEpisode[0].director}</li>
                            <li> Produced By: {singleEpisode[0].producer}</li>
                            <li> Release Date: {singleEpisode[0].release_date}</li>
                        </ul>
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem collapseId={2} headerTitle={<><MDBIcon fas icon="portrait" /> &nbsp; Characters </>}>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem collapseId={3} headerTitle={<><MDBIcon fas icon="globe-americas" /> &nbsp; Planets </>}>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem collapseId={4} headerTitle={<><MDBIcon fas icon="car-alt" /> &nbsp; Vehicles </>}>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem collapseId={5} headerTitle={<><MDBIcon fas icon="space-shuttle" /> &nbsp; Starships </>}>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </MDBAccordionItem>
                    <br/>
                    <MDBAccordionItem collapseId={6} headerTitle={<><MDBIcon fas icon="genderless" /> &nbsp; Species </>}>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </MDBAccordionItem>
                </MDBAccordion>
            </div>    
        </Fragment>
    );
};

export default Episode;