const db = require('./index.js');
const faker = require('faker');


const seedData = (numOfData) => {
  for (let i = 0; i < numOfData; i++) {
    // create random number of tags
    let random = Math.floor(Math.random() * 10);
    let randomTags = [];


    // create array for date conflicts

    // create array for dates scheduled

    // create random array for memberRole
    let memberRoleChoices = ['admin', 'member'];

    // create random array for memberType
    let memberTypeChoices = [];


    // always make first object game_name Stardew_Valley
    db.save({
      orgName: faker.random.companyName(),
      firstName: faker.random.firstName(),
      lastName: faker.random.lastName(),
      email: faker.random.email(),
      phone: faker.random.phone(),
      memberRole: String,
      memberType: String,
      dateConflicts: [String],
      dateScheduled: [String]
    });

  }
};

seedData(15);