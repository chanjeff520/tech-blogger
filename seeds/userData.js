const {User} = require('../models');

const userData = [
    {
        username: "CodingWiz",
        email: "codingWiz@gmail.com",
        password: "ILoveTurtles!4"
    },
    {
        username: "sixty9four20",
        email: "blaze420@gmail.com",
        password: "giveMetheB1unt"
    },
    {
        username: "FarlyBaconChicken",
        email: "FarlyWhittles@gmail.com",
        password: "Hell0W0rld!!"
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;