import { DataTypes, Sequelize } from 'sequelize';
import { MovieRoleEntity } from '../../model/movierole.entity';
export const MovieRoleEntityConfiguration = (seq:Sequelize) => {
    MovieRoleEntity.init(
        {
            id : {
                type : DataTypes.UUID,
                defaultValue : DataTypes.UUIDV4,
                primaryKey : true
            },
            movieId : {
                type : DataTypes.UUID,
                allowNull : false
            },
            personId : {
                type : DataTypes.UUID,
                allowNull : false
            },
            role : {
                type : DataTypes.ENUM("AUTHOR","ACTOR"),
                allowNull : false
            }
        },
        {
            tableName: 'movieroles', sequelize : seq
        }
    )
}