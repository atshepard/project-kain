const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

//gets all trip data for the logged in user: 
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = `
                  SELECT "trip".id, "location_name", "latitude", "longitude", 
                  "start_date", "end_date" from "trip"
                  JOIN "user_trip" on "user_trip".trip_id = "trip".id
                  WHERE "user_trip".user_id = $1
                  ORDER BY "start_date" DESC;`

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
router.get('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `
  SELECT * from "trip"
  WHERE "trip".id = $1;`;

  pool.query(queryText, [req.params.id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error in single trip get: ', error);
      res.sendStatus(500);
    })
});

//gets media for a specific trip
router.get('/media/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `
  SELECT "media".id, "media".link, "media".media_type FROM "media"
  JOIN "trip" ON "media".trip_id = "trip".id
  WHERE "trip".id = $1;`;

  pool.query(queryText, [req.params.id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error in media trip get: ', error);
      res.sendStatus(500);
    })
});

//updates a specific trip:
router.put('/:id', rejectUnauthenticated, (req, res) => {

  const queryText = `
    UPDATE "trip" 
    SET "location_name" = $2, "latitude" = $3, "longitude" = $4, 
    "start_date" = $5, "end_date" = $6
    WHERE "id" = $1;`;

  const queryValues = [req.params.id, req.body.location_name, req.body.latitude,
  req.body.longitude, req.body.start_date, req.body.end_date];

  pool.query(queryText, queryValues)
    .then(result => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log('error in single trip get: ', error);
      res.sendStatus(500);
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `DELETE FROM "trip" WHERE "id" = $1`

  pool.query(queryText, [req.params.id])
    .then(result => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log('error in single trip get: ', error);
      res.sendStatus(500);
    })

})

//posts a new trip
router.post('/', rejectUnauthenticated, (req, res) => {

  let trip = req.body.state
  // console.log(trip);

  const queryText = `
  INSERT INTO "trip" 
  ("location_name", "latitude", "longitude", "start_date", "end_date")
  VALUES ($1, $2, $3, $4, $5)
  returning "id";`;

  const queryValues =
    [trip.locationName, trip.latitude,
    trip.longitude, trip.startDate, trip.endDate]

  pool.query(queryText, queryValues)
    .then(result => {
      const newTripID = result.rows[0].id

      const queryText =
        `INSERT INTO "user_trip" ("user_id", "trip_id")
          VALUES ($1, $2);`;

      pool.query(queryText, [req.user.id, newTripID])
        .then(result => {
          res.sendStatus(201);
        })
        .catch(error => {
          console.log('error in user trip post: ', error);
          res.sendStatus(500);
        })
    })
    .catch(error => {
      console.log('error in  trip post: ', error);
      res.sendStatus(500);
    })

});

module.exports = router;
