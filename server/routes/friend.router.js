const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT "id", "display_name", "profile_image" FROM "user";`;

    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error in pin trip get: ', error);
            res.sendStatus(500);
        })

});


router.get('/mine', rejectUnauthenticated, (req, res) => {
    const queryText =
    `SELECT "display_name" FROM "user"
    JOIN "friends" ON "friends".user_1_id = $1 
    OR "friends".user_2_id = $1;`;

    pool.query(queryText, [req.user.id])
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error in pin trip get: ', error);
            res.sendStatus(500);
        })

});

/**
 * POST route template
 */
router.post('/:id', rejectUnauthenticated, (req, res) => {
    // POST route code here

    const queryText =
        `INSERT INTO "friends" ("user_1_id", "user_2_id")
    VALUES ($1, $2);`;

    pool.query(queryText, [req.user.id, req.params.id])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error in user trip post: ', error);
            res.sendStatus(500);
        })
});

module.exports = router;
