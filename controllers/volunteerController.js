var Volunteer = require('../models/volunteer');

// Display list of all volunteer opportunities
exports.volunteer_list = function(req, res) {
  res.render('index', { title: 'Civil Service Volunteering - Home' });
};

// Display detail page for a specific volunteer opportunities
exports.volunteer_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Display volunteer opportunities create form on GET
exports.volunteer_create_get = function(req, res) {
    res.render('opportunities', { title: 'Civil Service Volunteering - Add opportunity' });
};

// Handle volunteer opportunities create on POST
exports.volunteer_create_post = function(req, res, next) {
	console.log(req.body);

	//Check that the name field is not empty
    req.checkBody('vol_title', 'You must enter a title').notEmpty();
    req.checkBody('vol_location', 'You must enter a location').notEmpty(); 
    req.checkBody('vol_description', 'You must enter a description').notEmpty(); 

    //Trim and escape the fields. 
    req.sanitize('vol_title').escape();
    req.sanitize('vol_title').trim();
    req.sanitize('vol_location').escape();
    req.sanitize('vol_location').trim();
    req.sanitize('vol_description').escape();
    req.sanitize('vol_description').trim();

    //Run the validators
    var errors = req.validationErrors();

    var volunteer = new Volunteer(
		{ 	vol_title: req.body.vol_title,
			vol_location: req.body.vol_location,
			vol_description: req.body.vol_description
		});

    if (errors) {
        res.render('opportunities', { title: 'Civil Service Volunteering - Add opportunity', volunteer: volunteer, errors: errors});
    return;
    } 
    else {
    // Data from form is valid
    
        volunteer.save(function (err) {
            if (err) { return next(err); }
               //successful - redirect to new author record.
               res.redirect(opportunity.url);
            });
    }

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