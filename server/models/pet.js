var mongoose = require('mongoose');

var PetSchema = mongoose.Schema({
    name: {type: String, required: [true, "Name must be 3 or more characters"], minlength:[3, "Name must be 3 or more characters"]},
    petType: {type: String, required: [true, "petType must be 3 or more characters"],  minlength:[3, "petType must be 3 or more characters"]},
    description: {type: String, required: [true, "description must be 3 or more characters"], minlength:[3, "description must be 3 or more characters"]},
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String}
});

mongoose.model('Pet', PetSchema);