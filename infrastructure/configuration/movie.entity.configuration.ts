import { MovieEntity } from '../../model/movie.entity';
import { DataTypes, Sequelize } from 'sequelize';

export const MovieEntityConfiguration = (seq : Sequelize) => {
    MovieEntity.init(
        {
            id : {
                type : DataTypes.UUID,
                defaultValue : DataTypes.UUIDV4,
                primaryKey : true
            },
            title : {
                type : DataTypes.STRING(30),
                allowNull : false,
                unique : true
            },
            releaseDate : {
                type : DataTypes.DATE,
                allowNull : false
            },
            summary : {
                type : DataTypes.TEXT,
                allowNull : true
            },
            speechLanguage : {
                type : DataTypes.STRING(30),
                allowNull : false
            }
        },
        {
            tableName: 'movies', sequelize : seq
        }
    )
}

