import { Sequelize } from "sequelize";
import { MovieRoleEntityConfiguration } from '../configuration/movierole.entity.configuration';
import { MovieEntityConfiguration } from '../configuration/movie.entity.configuration';
import { PersonEntityConfiguration } from "../configuration/person.entity.configuration";

export class DatabaseCollection{
    constructor(database:string , databaseUser :string, databasePassword:string){
        const sequelize = new Sequelize(
            database,
            databaseUser,
            databasePassword, {
                dialect: 'postgres',
            },
        );

        MovieRoleEntityConfiguration(sequelize);
        PersonEntityConfiguration(sequelize);
        MovieEntityConfiguration(sequelize);

        sequelize.sync();
    }
}