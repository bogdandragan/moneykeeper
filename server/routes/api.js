const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
    console.log(req.user);
    res.send('api works');
});

module.exports = router;