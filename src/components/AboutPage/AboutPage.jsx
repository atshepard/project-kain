import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h5>Project KAIN is a community building app for people who live nomadic lifestyles.</h5>
        <p>KAIN was built to make life easier for the beautiful people at Average Wanderers: 
          allowing them to stay safe and connected with their community while on the road.</p>
      </div>
    </div>
  );
}

export default AboutPage;
