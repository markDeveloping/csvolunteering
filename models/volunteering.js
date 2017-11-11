var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VolunteeringSchema = Schema(
		{
			vol_title: {type: String, required: [true, "You need a title"], max: 100},
			vol_location: {type: String, required: true, max: 100},
			vol_description: {type: String, required: true},
			vol_sponsor: {type: String, required: true},
		}
	);

// Virtual for volunteer's URL
VolunteeringSchema
.virtual('url')
.get(function () {
  return '/catalog/volunteering/' + this._id;
});

//Export model
module.exports = mongoose.model('Volunteering', VolunteeringSchema);