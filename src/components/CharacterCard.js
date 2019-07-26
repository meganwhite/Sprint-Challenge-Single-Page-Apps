import React from 'react'
import {Card, CardText, Image} from "./StyledWidgets";

export default function CharacterCard(props) {
  const {image,name,species,status,location, origin} = props;
  return (
    <Card className = "character-card">
      <Image src={image} alt={name}/>
      <CardText>
        <h2>{name}</h2>
        <div className="species-status">
          <p>{species} {status}</p>
        </div>
        <p>Location: {location.name}</p>
        <p>Origin: {origin.name}</p>
      </CardText>
    </Card>
  )
}


