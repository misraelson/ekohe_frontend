import React, { useState } from 'react';
import EndpointData from '../ApiActions/ApiGet'
import '../sass/_main_page.scss';

const term = "batman"
const ENDPOINT = `http://api.tvmaze.com/search/shows?q=${term}`

function Batman(batman, index) {
  return (
    <div key={index} className="batman--show">
      <div className="show-image"><img src={batman.show.image.medium} alt={batman.show.name}/></div>
      <div className="show-info">
        <p>Show Name: {batman.show.name}</p>
        <p>Premiere Date: {batman.show.premiered}</p>
        <p>Rating: {batman.show.rating.average}</p>
        <p>Type: {batman.show.type} </p>
        <p>Plot Summary: <span dangerouslySetInnerHTML={{__html: batman.show.summary}}/></p>
      </div>
    </div>
  )
}

export default function MainPage() {
  const [batman, setBatman] = useState([]);
  EndpointData(ENDPOINT, setBatman);
  return (
    <div className="Batman--box">
      {batman.map( (batman, index) => (Batman(batman, index)))}
    </div>
  )
};