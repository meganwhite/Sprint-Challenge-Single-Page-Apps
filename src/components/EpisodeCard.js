import React from 'react'
import {Card, Title, CardText, SubText, Text} from "./StyledWidgets";
import { Link } from "react-router-dom";

export default function LocationCard (props) {
  const { name, airDate, episodeCode, characters } = props;
  return (
    <Card className = "location-card">
      <CardText>
        <Title>{name}</Title>
        <SubText>{episodeCode}</SubText>
        <Text>{`Air date: ${airDate}`}</Text>
        <Link to = './characters/'><Text>{`Characters: ${characters.length}`}</Text></Link>
      </CardText>
      {/* {characters.map(character => (
        <div key = {character} className = "character">
          {character}
        </div>
      ))} */}
    </Card>
  )
}