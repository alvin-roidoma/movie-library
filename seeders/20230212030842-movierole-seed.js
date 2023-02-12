'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    var movieRoleSeeder = [
        {id : "22c4f5d7-bae0-4492-821c-d8b293e9d5e1" ,movieId : "3bd2118d-da24-48b8-8976-faf0b0ab306b", personId : "ed65f78c-0df2-4854-bff7-fcabfa7e8c89", createdAt : new Date(), updatedAt : new Date() , role : "AUTHOR"},
        {id : "1018ad65-2c88-4b8b-bc7e-fa7b8f42508f" ,movieId : "b15ca313-a8ae-4e9f-811d-c8dc1d07ed4d", personId : "aae33635-e903-46df-9987-5084554c1319", createdAt : new Date(), updatedAt : new Date() , role : "AUTHOR"},
        {id : "6fbe5025-d17f-4f9c-9fba-5d0f303e4830" ,movieId : "920ee263-78ae-4664-b87c-5023cb376806", personId : "8157a9a9-a3c2-440c-a1c0-105dc3c3352a", createdAt : new Date(), updatedAt : new Date() , role : "AUTHOR"},
        {id : "e25d4467-4438-4142-88ce-8a148f6d32b8" ,movieId : "8aee2070-b73d-4f6d-a821-ae8c76529375", personId : "20019cf3-bd0c-452d-8329-abf543d044e4", createdAt : new Date(), updatedAt : new Date() , role : "AUTHOR"},
        {id : "488cb82a-8e32-485d-b938-224f9a905637" ,movieId : "90ed4e83-32ad-45d6-8f45-96860c35e768", personId : "f6ed635e-efe0-482d-b588-4db265bd9576", createdAt : new Date(), updatedAt : new Date() , role : "AUTHOR"},
        {id : "7f96c140-43c5-41e8-8cee-cc80f7da4575" ,movieId : "3bd2118d-da24-48b8-8976-faf0b0ab306b", personId : "f6ed635e-efe0-482d-b588-4db265bd9576", createdAt : new Date(), updatedAt : new Date() , role : "ACTOR"},
        {id : "d6511f90-19c5-4b43-9bcb-a9f0b864f055" ,movieId : "b15ca313-a8ae-4e9f-811d-c8dc1d07ed4d", personId : "20019cf3-bd0c-452d-8329-abf543d044e4", createdAt : new Date(), updatedAt : new Date() , role : "ACTOR"},
        {id : "d14d5b57-29a7-4c4a-bc25-dc962278bf84" ,movieId : "920ee263-78ae-4664-b87c-5023cb376806", personId : "8157a9a9-a3c2-440c-a1c0-105dc3c3352a", createdAt : new Date(), updatedAt : new Date() , role : "ACTOR"},
        {id : "7b32c10c-4d8d-4eff-be58-9750703c4ffb" ,movieId : "8aee2070-b73d-4f6d-a821-ae8c76529375", personId : "aae33635-e903-46df-9987-5084554c1319", createdAt : new Date(), updatedAt : new Date() , role : "ACTOR"},
        {id : "bd099ff7-5221-40bc-ab01-67f20b3c143b" ,movieId : "90ed4e83-32ad-45d6-8f45-96860c35e768", personId : "ed65f78c-0df2-4854-bff7-fcabfa7e8c89", createdAt : new Date(), updatedAt : new Date() , role : "ACTOR"}
    ]
    return queryInterface.bulkInsert("movieroles",movieRoleSeeder)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("movieroles",null,{})
  }
};
