import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

export class PersonEntity extends Model<InferAttributes<PersonEntity>,InferCreationAttributes<PersonEntity>> {
  declare id: CreationOptional<DataTypes.AbstractDataType>;
  declare name : string;
  declare birthDate : Date;
  declare gender : string;
}