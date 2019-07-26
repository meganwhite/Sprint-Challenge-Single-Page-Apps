import React from 'react'
import {Card, Title, CardText, ResidentBox} from "./StyledWidgets";
import { Link } from "react-router-dom";

export default function LocationCard (props) {
  const { name, type, dimension, residents } = props;
  return (
    <Card className = "location-card">
      <CardText>
        <Title>{name}</Title>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
        {/* {residents.map(resident => (
          <div key = {resident} className = "resident">
            {resident}
          </div>
        ))} */}
      </CardText>
      <Link to = './characters/'><ResidentBox>{`${residents.length} residents`}</ResidentBox></Link>
    </Card>
  )
}

