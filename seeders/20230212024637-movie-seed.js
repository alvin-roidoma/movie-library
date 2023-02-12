'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    var movieSeeder = [
        {id : "3bd2118d-da24-48b8-8976-faf0b0ab306b",title : "Doctor Of The Stars", releaseDate : new Date("2019-01-01"), summary : "Doctor Of The Stars is a spiritual medicine man who guides souls on their journey to the Great Unknown.", speechLanguage : "English" , createdAt : new Date(), updatedAt : new Date()},
        {id : "b15ca313-a8ae-4e9f-811d-c8dc1d07ed4d",title : "Pilots Of The Sun", releaseDate : new Date("2018-01-02"), summary : "The Pilots Of The Sun have been described as having an upbeat and infectious sound.", speechLanguage : "Korea" ,createdAt : new Date(), updatedAt : new Date()},
        {id : "920ee263-78ae-4664-b87c-5023cb376806",title : "Recruits And Traitors", releaseDate : new Date("2017-01-02"), summary : "The military took steps to vet potential recruits and track down any traitors within their ranks.", speechLanguage : "Germany", createdAt : new Date(), updatedAt : new Date()},
        {id : "8aee2070-b73d-4f6d-a821-ae8c76529375",title : "Origin Of The Faceless Ones", releaseDate : new Date("2016-01-02"), summary : "Historians believe The Faceless Ones may have existed during the time of the dinosaurs, but only recently began appearing in human societies.", speechLanguage : "English", createdAt : new Date(), updatedAt : new Date()},
        {id : "90ed4e83-32ad-45d6-8f45-96860c35e768",title : "Favor Of Aliens", releaseDate : new Date("2015-01-02"), summary : "Many people in the United States are increasingly in favor of aliens receiving rights and privileges similar to American citizens.", speechLanguage : "English", createdAt : new Date(), updatedAt : new Date()}
    ]
    return queryInterface.bulkInsert("movies",movieSeeder)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("movies",null,{})
  }
};
