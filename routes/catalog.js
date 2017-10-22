var express = require('express');
var router = express.Router();

// Require controller modules
var volunteer_controller = require('../controllers/volunteerController');

/// AUTHOR ROUTES ///

/* GET request for creating Author. NOTE This must come before route for id (i.e. display author) */
router.get('/volunteer/create', volunteer_controller.volunteer_create_get);

/* POST request for creating Author. */
router.post('/volunteer/create', volunteer_controller.volunteer_create_post);

/* GET request to delete Author. */
router.get('/volunteer/:id/delete', volunteer_controller.volunteer_delete_get);

// POST request to delete Author
router.post('/volunteer/:id/delete', volunteer_controller.volunteer_delete_post);

/* GET request to update Author. */
router.get('/volunteer/:id/update', volunteer_controller.volunteer_update_get);

// POST request to update Author
router.post('/volunteer/:id/update', volunteer_controller.volunteer_update_post);

/* GET request for one Author. */
router.get('/volunteer/:id', volunteer_controller.volunteer_detail);

/* GET request for list of all Authors. */
router.get('/volunteer', volunteer_controller.volunteer_list);

module.exports = router;