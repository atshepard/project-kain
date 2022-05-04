![Repo Size](https://img.shields.io/github/languages/code-size/atshepard/project-kain.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/atshepard/project-kain.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/atshepard/project-kain.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/atshepard/project-kain.svg?style=for-the-badge)
    
# Kain, a nomad's best friend

## Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Acknowledgements](#acknowledgements)
- [Contacts](#contacts)

## Description

Kain is a community-building app for intentional nomads. Designed to make it easy to add friends, map your trips, and share wisdom while on the road, Kain is the ultimate travel companion. 

## Screenshots

<img src="" />## Built With

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a><a href="https://www.heroku.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

## Getting Started

Project Kain requires a GoogleMaps Javascript API & GoogleMaps Geolocation API key to properly run. 

When you have your key, it can be added to a .env file at the root of the repository or for temporary use can replace every instance of "REACT_APP_GOOGLE_API" in the app.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)


### Installation

Create a database named "project_kain".
 
The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. 

Open up your editor of choice and run an npm install
Run npm run server in your terminal
Run npm run client in your terminal
Navigate to localhost:3000

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

## Deployment

1. Create a new Heroku project
2. Link the Heroku project to the project GitHub Repo
3. Create an Heroku Postgres database
4. Connect to the Heroku Postgres database from Postico
5. Create the necessary tables
6. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
7. In the deploy section, select manual deploy


## Acknowledgements

Thank you to the fine folks at @react-google-maps/api for providing an easy-to-use library to make using the Google Maps API and React play nicely. 

## Contacts

<a href="https://www.linkedin.com/in/atshepard"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a> 