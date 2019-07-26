import React from 'react'
import {Card, CardText, Image, SubText,Title,Text} from "./StyledWidgets";
import { Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function CharacterCard(props) {
  const {image,name,species,status,location, origin} = props;
  return (
    <Card className = "character-card">
      <Image src={image} alt={name}/>
      <CardText>
        <Title>{name}</Title>
        <div className="species-status">
          <SubText>{species} {status}</SubText>
        </div>
        <Text>Location: {location.name}</Text>
        <Text>Origin: {origin.name}</Text>
        <br></br>
        <Link to = './episodes'><SubText><span><Icon name="user"/></span>Episodes</SubText></Link>
      </CardText>
    </Card>
  )
}


