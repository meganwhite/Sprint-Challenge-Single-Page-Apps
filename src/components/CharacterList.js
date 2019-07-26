import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const[characterList, setCharacterList] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacterList(response.data.results)
          
        })
        .catch(error => {
          console.error('Server Error', error);
        });
      }

      getCharacters();

  }, [])

  return (
    <section className='character-list grid-view'>
       <h2>{characterList.map(character => (
         <CharacterDetails key = {character.id}  character = {character} />
       ))}
       </h2>
    </section>
  )

}

function CharacterDetails({character}) {
  const {name, status, species} = character;
  return (
    <div className="character-card">
      <Link to = {`/characters/${character.id}`}><h2>{name}</h2></Link>
      <div className="species-status">
        <p>{species} {status}</p>
      </div>
    </div>
  )
}