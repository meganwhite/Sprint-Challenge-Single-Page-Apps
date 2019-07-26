import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import EpisodeCard from './EpisodeCard'

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const[episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getEpisodes = () => {
      axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
          setEpisodeList(response.data.results)
          
        })
        .catch(error => {
          console.error('Server Error', error);
        });
      }

      getEpisodes();

  }, [])

  return (
    <section className='episode-list grid-view'>
      {episodeList.map(episode => {
        return (
            <Link to = {`/episodes/${episode.id}`}>
              <EpisodeCard 
              episode = {episode}
              key = {episode.id}
              airDate = {episode.air_date}
              episodeCode = {episode.episode}
              characters = {episode.characters}
              />
            </Link>
        )
      })}
    </section>
  )

}