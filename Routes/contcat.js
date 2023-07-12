const router = require('express').Router();
const { request } = require('express');
const pool = require('../db');

//post contact

router.post('/', async (req, res) => {
  const { fullname, email, telephone, message } = req.body;

  pool.query(
    'INSERT INTO contact (fullname, email, telephone, message ) VALUES ($1, $2, $3, $4) RETURNING *',
    [fullname, email, telephone, message],

    (err, results) => {
      if (!fullname || !telephone || !email) {
        return res.status(400).json({ msg: 'Please fill all fields' });
      } else {
        res.status(201).json({
          status: 'contact Submit Successfully !',
          data: {
            contact: results.rows[0],
          },
        });
      }
    }
  );
});

router.get('/', (req, res) => {
  req.setEncoding('ok');
});

module.exports = router;
