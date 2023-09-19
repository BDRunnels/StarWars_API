import { useState, useEffect, Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation";
import Films from "./components/category/films";
import Episode from "./components/episode/episode";
import Footer from "./components/footer/footer";

import Category from "./components/category/category";
import Toggler from "./components/modeToggler/modeToggler";

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
            // For Loop to access all API elements
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
            // Initializing Page Count for API
            let pageCount = 1;
            // Initializing empty array to hold contents of API (10 results per page)
            let planetsArray = []
            // For Loop to access all API elements
            for (pageCount ; pageCount <= 7; pageCount++) {

                const response = await fetch(`${DATA_URL}/planets/?page=${pageCount}`);
                const translatedData =  await response.json();
                planetsArray.push(translatedData.results)
            };
            
            setPlanetsData(planetsArray.flat());
           
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
            // For Loop to access all API elements
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
            // For Loop to access all API elements
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
            // For Loop to access all API elements
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
            <Toggler />
            <Routes>
                <Route path='/' element={<Films filmData={filmData}/>} />
                <Route path='/films/:episodeId' element={<Episode 
                    filmData={filmData} 
                    peopleData={peopleData} 
                    speciesData={speciesData}
                    starshipData={starshipData}
                    vehicleData={vehicleData}
                    planetsData={planetsData}
                    />}
                />
                <Route path='/:categoryURL' element={<Category 
                    peopleData={peopleData} 
                    speciesData={speciesData}
                    starshipData={starshipData}
                    vehicleData={vehicleData}
                    planetsData={planetsData}
                    />} 
                />
            </Routes>
            <Footer />
        </Fragment>
    );
};

export default App;