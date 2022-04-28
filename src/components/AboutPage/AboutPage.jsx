import React from 'react';
import { ImageList, ImageListItem } from "@mui/material";

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
      <ImageList cols={2}>

                    <ImageListItem key={1}>
                        <img height="75vh" width="75vw" sx={{ m: 2}} src={`/images/kain.jpeg`} />
                    </ImageListItem>
                    <ImageListItem key={2}>
                        <img height="75vh" width="75vw" sx={{ m: 2}} src={`/images/bryce&jen.jpeg`} />
                    </ImageListItem>

            </ImageList>
    </div>
  );
}

export default AboutPage;
