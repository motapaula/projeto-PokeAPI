import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import "./style.css"

type CardProps = {
  image: string;
  title: string;
  route: string;
}

const PokemonCards = ({image, title, route}: CardProps) => {
  return (
    <div>PokemonCards</div>
  )
}

export default PokemonCards;