import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import LocationCard from './LocationCard'

export default function LocationsList() {
    const[locationsList, setLocationsList] = useState([]);



    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        const getLocations = () => {
          axios
            .get('https://rickandmortyapi.com/api/location/')
            .then(response => {
              setLocationsList(response.data.results)
              
            })
            .catch(error => {
              console.error('Server Error', error);
            });
          }
    
          getLocations();
    
      }, [])


      return (
        <section className='locations-list grid-view'>
          {locationsList.map(location => {
            return (
                <Link to = {`/locations/${location.id}`}>
                  <LocationCard 
                  location = {location}
                  key = {location.id}
                  name = {location.name}
                  type = {location.type}
                  dimension = {location.dimension}
                  residents = {location.residents}
                  />
                </Link>
            )
          })}
        </section>
      )

}
