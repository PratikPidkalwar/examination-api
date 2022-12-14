const express = require('express');
const router = express.Router();
const { createStudents } = require('../controllers/studentController');
const { createAdmin } = require('../controllers/adminController');
const { createPapper } = require('../controllers/papperController');

router.post('/student', createStudents);
router.post('/admin', createAdmin);
router.post('/paper', createPapper);


// router.put('/admin', createStudents);
// router.get('/adminpaper', createStudents);

// router.get('/studentpaper');


module.exports = router;