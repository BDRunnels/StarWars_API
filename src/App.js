import { useState, useEffect, Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import { MDBContainer } from 'mdb-react-ui-kit';


import Navigation from "./components/navigation/navigation";
import Films from "./components/category/films";
import Episode from "./components/episode/episode";
import People from "./components/category/people";
import Species from "./components/category/species";
import Starships from "./components/category/starships";
import Vehicles from "./components/category/vehicles";

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
            // Initializing Page Count for API
            let pageCount = 1;
            // Initializing empty array to hold contents of API (10 results per page)
            let starshipArray = []
            // For Loop to access all API elements (87 total, 9 pages)
            for (pageCount ; pageCount <= 4; pageCount++) {

                const response = await fetch(`${DATA_URL}/starships/?page=${pageCount}`);
                const translatedData =  await response.json();
                starshipArray.push(translatedData.results)
            };
            
            setStarshipData(starshipArray.flat());
           
        } catch (error) {
            console.log('error fetching all data', error);
        };
    };

    // Fetching Species Data
    async function fetchSpeciesData () {
        try {
            // Initializing Page Count for API
            let pageCount = 1;
            // Initializing empty array to hold contents of API (10 results per page)
            let speciesArray = []
            // For Loop to access all API elements (87 total, 9 pages)
            for (pageCount ; pageCount <= 4; pageCount++) {

                const response = await fetch(`${DATA_URL}/species/?page=${pageCount}`);
                const translatedData =  await response.json();
                speciesArray.push(translatedData.results)
            };
            
            setSpeciesData(speciesArray.flat());
           
        } catch (error) {
            console.log('error fetching all data', error);
        };
    };

    // Fetching Vehicle Data
    async function fetchVehicleData () {
        try {
            // Initializing Page Count for API
            let pageCount = 1;
            // Initializing empty array to hold contents of API (10 results per page)
            let vehicleArray = []
            // For Loop to access all API elements (87 total, 9 pages)
            for (pageCount ; pageCount <= 4; pageCount++) {

                const response = await fetch(`${DATA_URL}/vehicles/?page=${pageCount}`);
                const translatedData =  await response.json();
                vehicleArray.push(translatedData.results)
            };
            
            setVehicleData(vehicleArray.flat());
           
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
                <Route path='/' element={<Films filmData={filmData}/>} />
                <Route path='/films/:episodeId' element={<Episode filmData={filmData} peopleData={peopleData} />}/>
                <Route path='/people' element={<People peopleData={peopleData}/>} />
                <Route path='/species' element={<Species speciesData={speciesData}/>} />
                <Route path='/starships' element={<Starships starshipData={starshipData}/>} />
                <Route path='/vehicles' element={<Vehicles vehicleData={vehicleData}/>} />
            </Routes>
        
        </Fragment>
    );
};

export default App;