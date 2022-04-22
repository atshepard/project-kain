const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = ``

  pool.query(queryText, [req.user.id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error in pin trip get: ', error);
      res.sendStatus(500);
    })

});


router.get('/mine', (req, res) => {
    const queryText = ``
  
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
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
