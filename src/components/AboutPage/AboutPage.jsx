import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h3>Project KAIN is a community building app for people who live nomadic lifestyles.</h3>
        <p>KAIN was built to make life easier for the beautiful people at Average Wanderers:
          allowing them to stay safe and connected with their community while on the road.</p>
      </div>
      <ImageList cols={2} rowHeight={350}>
        <ImageListItem key={1}>
          <img sx={{ m: 2 }} src={`/images/kain.jpeg`} />
          <ImageListItemBar title="Kain, the best boy" subtitle="@kain_agoodboy" />
        </ImageListItem>
        <ImageListItem key={2}>
          <img sx={{ m: 2 }} src={`/images/bryce&jen.jpeg`} />
          <ImageListItemBar title="Bryce & Jen, the best people" subtitle="@average_wanderers" />
        </ImageListItem>
      </ImageList>
      <div>
        <br />
        <h3>Project KAIN was built using a wide array of technologies: </h3>
        <img src={`/images/used.png`}></img>
        <br />
        <p>Styling: </p>
        <ul>
          <li>Material UI</li>
          <li>CSS</li>
        </ul>
        <p>Functionality: </p>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Redux-Saga</li>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>PostgreSQL</li>
          <li>Google Maps Javascript API</li>
          <li>Google Places API</li>
          <li>Google Geolocation API</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
