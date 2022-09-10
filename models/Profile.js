const mongoose = require('../db/connection');

const ProfileSchema = new mongoose.Schema(
    {
        code: { type: String }
    },
);


//------- instantiate the model w/ schema -------
const Profile = mongoose.model('Profile', ProfileSchema);

//------- export model -------
module.exports = Profile;