import { useState, useEffect, Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import { MDBContainer } from 'mdb-react-ui-kit';


import Navigation from "./components/navigation/navigation";
import Films from "./components/category/films";
import Episode from "./components/episode/episode";
import People from "./components/category/people";

const DATA_URL = 'https://swapi.py4e.com/api'

const App = () => {
    const [ filmData, setFilmData ] = useState([]);
    const [ peopleData, setPeopleData ] = useState([]);
    const [ planetsData, setPlanetsData ] = useState([]);
    const [ starshipData, setStarshipData ] = useState([]);
    const [ speciesData, setSpeciesData ] = useState([]);
    const [ vehicleData, setVehicleData ] = useState([]);

    // Fetching Film Data
    async function fetchFilmsData () {
        try {
            const response = await fetch(`${DATA_URL}/films`);
            
            const translatedData =  await response.json();
            setFilmData(translatedData.results);
           
        } catch (error) {
            console.log('error fetching all data', error);
        };
    };

    // Fetching People Data
    async function fetchPeopleData () {
        try {
            // Initializing Page Count for API
            let pageCount = 1;
            // Initializing empty array to hold contents of API (10 results per page)
            let peopleArray = []
            // For Loop to access all API elements (87 total, 9 pages)
            for (pageCount ; pageCount <= 9; pageCount++) {

                const response = await fetch(`${DATA_URL}/people/?page=${pageCount}`);
                const translatedData =  await response.json();
                peopleArray.push(translatedData.results)
            };
            
            setPeopleData(peopleArray.flat());
           
        } catch (error) {
            console.log('error fetching all data', error);
        };
    };

    // Fetching Planets Data
    async function fetchPlanetsData () {
        try {
            const response = await fetch(`${DATA_URL}/planets`);
            
            const translatedData =  await response.json();
            setPlanetsData(translatedData);
           
        } catch (error) {
            console.log('error fetching all data', error);
        };
    };

    // Fetching Starship Data
    async function fetchStarshipData () {
        try {
            const response = await fetch(`${DATA_URL}/starships`);
            
            const translatedData =  await response.json();
            setStarshipData(translatedData);
           
        } catch (error) {
            console.log('error fetching all data', error);
        };
    };

    // Fetching Species Data
    async function fetchSpeciesData () {
        try {
            const response = await fetch(`${DATA_URL}/species`);
            
            const translatedData =  await response.json();
            setSpeciesData(translatedData);
           
        } catch (error) {
            console.log('error fetching all data', error);
        };
    };

    // Fetching Vehicle Data
    async function fetchVehicleData () {
        try {
            const response = await fetch(`${DATA_URL}/vehicles`);
            
            const translatedData =  await response.json();
            setVehicleData(translatedData);
           
        } catch (error) {
            console.log('error fetching all data', error);
        };
    };

    useEffect(() => {
        fetchFilmsData();
        fetchPeopleData();
        fetchPlanetsData();
        fetchSpeciesData();
        fetchStarshipData();
        fetchVehicleData();

    }, []);

    return (
        <Fragment>
            <Navigation />
            <Routes>
                <Route path='/films' element={<Films filmData={filmData}/>} />
                <Route path='/films/:episodeId' element={<Episode filmData={filmData} peopleData={peopleData} />}/>
                <Route path='/people' element={<People peopleData={peopleData}/>} />
            </Routes>
        
        </Fragment>
    );
};

export default App;