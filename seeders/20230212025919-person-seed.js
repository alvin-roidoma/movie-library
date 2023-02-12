'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    var personSeeder = [
      {"id":"ed65f78c-0df2-4854-bff7-fcabfa7e8c89","name":"Pierce Blenkin","birthDate":"2000-12-16","gender":"MALE","createdAt":"2022-10-31","updatedAt":"2022-09-04"},
      {"id":"aae33635-e903-46df-9987-5084554c1319","name":"Forrester Kerr","birthDate":"2001-01-09","gender":"MALE","createdAt":"2022-04-12","updatedAt":"2022-11-08"},
      {"id":"8157a9a9-a3c2-440c-a1c0-105dc3c3352a","name":"Rozelle Cowx","birthDate":"2000-06-02","gender":"FEMALE","createdAt":"2022-06-18","updatedAt":"2022-08-13"},
      {"id":"20019cf3-bd0c-452d-8329-abf543d044e4","name":"Peg De Micoli","birthDate":"2001-01-14","gender":"FEMALE","createdAt":"2022-04-06","updatedAt":"2022-06-02"},
      {"id":"f6ed635e-efe0-482d-b588-4db265bd9576","name":"Alfred Wartonby","birthDate":"2001-11-30","gender":"MALE","createdAt":"2022-09-20","updatedAt":"2022-11-18"}
    ]
    return queryInterface.bulkInsert("persons",personSeeder);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("persons",null,{})
  }
};
