const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

//gets all trip data for the logged in user: 
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = `
                  SELECT "id", "location_name", "latitude", "longitude", 
                  "start_date", "end_date" from "trip"
                  JOIN "user_trip" on "user_trip".trip_id = "trip".id
                  WHERE "user_trip".user_id = $1;`

  pool.query(queryText, [req.user.id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error in trip get: ', error);
      res.sendStatus(500);
    })
});

//gets all data for a specific trip:
router.get('/:id', (req, res) => {
  const queryText = `
  SELECT "user".display_name, "user".profile_image, * from "trip"
  JOIN "user_trip" ON "user_trip".trip_id = "trip".id
  JOIN "user" ON "user_trip".user_id = $1
  WHERE "trip".id = $2;`;

  const queryValues = [req.user.id, req.params.id];

  pool.query(queryText, queryValues)
  .then(result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error in single trip get: ', error);
    res.sendStatus(500);
  })
});

//gets all pins associated with a trip:
router.get('/pins/:id', (req, res) => {
  const queryText = ``;

  const queryValues = [req.user.id, req.params.id];

  pool.query(queryText, queryValues)
  .then(result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error in single trip get: ', error);
    res.sendStatus(500);
  })
});


//posts a new trip
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
