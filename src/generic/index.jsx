import React from "react";
import { useLocation } from "react-router-dom"
import { GenericContainer } from "./style";

const Generic = () => {
  const location = useLocation()
  return (
    <GenericContainer>
      <GenericContainer.Title>Generic</GenericContainer.Title>
      <GenericContainer.Title>{location.pathname}</GenericContainer.Title>
    </GenericContainer>
  )
}

export default Generic