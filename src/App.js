import { useState, useEffect, Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import { MDBContainer } from 'mdb-react-ui-kit';


import Navigation from "./components/navigation/navigation";
import Films from "./components/category/films";
import Episode from "./components/episode/episode";

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
            const response = await fetch(`${DATA_URL}/people`);
            
            const translatedData =  await response.json();
            setPeopleData(translatedData);
           
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
                <Route path='/films/:episodeId' element={<Episode filmData={filmData} />}/>
            </Routes>
        
        </Fragment>
    );
};

export default App;