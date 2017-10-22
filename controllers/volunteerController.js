var Volunteer = require('../models/volunteering');

// Display list of all volunteer opportunities
exports.volunteer_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Author list');
};

// Display detail page for a specific volunteer opportunities
exports.volunteer_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Display volunteer opportunities create form on GET
exports.volunteer_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle volunteer opportunities create on POST
exports.volunteer_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
};

// Display volunteer opportunities delete form on GET
exports.volunteer_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle volunteer opportunities delete on POST
exports.volunteer_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display volunteer opportunities update form on GET
exports.volunteer_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle volunteer opportunities update on POST
exports.volunteer_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};