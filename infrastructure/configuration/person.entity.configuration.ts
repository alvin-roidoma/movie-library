import { DataTypes, Sequelize } from "sequelize"
import { PersonEntity } from "../../model/person.entity"

export const PersonEntityConfiguration = (seq : Sequelize) => {
    PersonEntity.init(
        {
            id : {
                type : DataTypes.UUID,
                defaultValue : DataTypes.UUIDV4,
                primaryKey : true
            },
            name : {
                type : DataTypes.STRING(30),
                allowNull : false
            },
            birthDate : {
                type : DataTypes.DATE,
                allowNull : false
            },
            gender : {
                type : DataTypes.ENUM("MALE","FEMALE"),
                allowNull : false
            }
        },
        {
            tableName: 'persons', sequelize : seq
        }
    )
}