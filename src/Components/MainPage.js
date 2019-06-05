import React, { useState } from 'react';
import EndpointData from '../ApiActions/ApiGet'
import '../sass/_main_page.scss';

const term = "batman"
const ENDPOINT = `http://api.tvmaze.com/search/shows?q=${term}`

function Batman(batman, index) {
  console.log("this is batman show", batman.show)
  return (
    <div key={index} className={"batman" + index}>
      <img src={batman.show.image.medium} alt={batman.show.name}/>
      <div className="show-info">Show Name: {batman.show.name}</div>
      <div className="show-info">Premiere Date: {batman.show.premiered}</div>
      <div className="show-info">Rating: {batman.show.rating.average}</div>
      <div className="show-info">Type: {batman.show.type} </div>
      <div className="show-info">Plot Summary: <span dangerouslySetInnerHTML={{__html: batman.show.summary}}/></div>
    </div>
  )
}

export default function MainPage() {

  const [batman, setBatman] = useState([]);
  EndpointData(ENDPOINT, setBatman);
  return (
    <div className="Batman-box">
      {batman.map( (batman, index) => (Batman(batman, index)))}
    </div>
  )
};