const db = require('./index.js');
const faker = require('faker');


const seedData = (numOfData) => {
  for (let i = 0; i < numOfData; i++) {

    // create array for date conflicts
    let datesConflictsChoices= [];
    let conflictDates = new Date();

    for (let i = 0; i < 4; i++) {
      let random = Math.floor(Math.random() * 2);
      if (random === 1) {
        conflictDates.setDate(conflictDates.getDate()+7);
        datesConflictsChoices.push(conflictDates.toISOString().substring(0,10));
      }
    }

/*
    // create array for dates scheduled
    let datesScheduledChoices = [];
    let scheduleDates = new Date();

    for (let i = 0; i < 4; i++) {
      scheduleDates.setDate(scheduleDates.getDate()+7);
      // if date exists in conflict array, do not add to scheduled array
      if (!datesConflictsChoices.includes(scheduleDates.toISOString().substring(0,10))) {
        datesScheduledChoices.push(scheduleDates.toISOString().substring(0,10));
      }
    }
    */

    // create random array for memberRole
    // let memberRoleChoices = ['admin', 'member'];
    // let randomRole = memberRoleChoices[Math.floor(Math.random() * 1)];

    // create random array for memberType
    // let memberTypeChoices = ['guitarist', 'vocalist', 'bassist', 'drummer', 'pianist'];
    // let randomType = memberTypeChoices[Math.floor(Math.random() * 4)];

    // always make first object game_name Stardew_Valley
    db.saveOne({
      orgName: faker.company.companyName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      memberRole: '',
      memberType: '',
      dateConflicts: datesConflictsChoices,
      datesScheduled: ['']
    }, (err, results) => {
      if (err) {
        throw err;
      }
    });
  }
};

seedData(15);