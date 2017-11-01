var express = require('express');
var router = express.Router();

// Require controller modules
var volunteer_controller = require('../controllers/volunteerController');

/// Opportunities ROUTES ///

/* GET request for creating Opportunities. NOTE This must come before route for id (i.e. display Opportunities) */
router.get('/opportunity/create', volunteer_controller.volunteer_create_get);

/* POST request for creating Opportunities. */
router.post('/opportunity/create', volunteer_controller.volunteer_create_post);

/* GET request to delete Opportunities. */
router.get('/opportunity/:id/delete', volunteer_controller.volunteer_delete_get);

// POST request to delete Opportunities
router.post('/opportunity/:id/delete', volunteer_controller.volunteer_delete_post);

/* GET request to update Opportunities. */
router.get('/opportunity/:id/update', volunteer_controller.volunteer_update_get);

// POST request to update Opportunities
router.post('/opportunity/:id/update', volunteer_controller.volunteer_update_post);

/* GET request for one Opportunities. */
router.get('/opportunity/:id', volunteer_controller.volunteer_detail);

/* GET request for list of all Opportunitiess. */
router.get('/', volunteer_controller.volunteer_list);

module.exports = router;