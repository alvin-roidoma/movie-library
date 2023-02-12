import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from "sequelize";

export class MovieRoleEntity extends Model<InferAttributes<MovieRoleEntity>,InferCreationAttributes<MovieRoleEntity>> {
  declare id: CreationOptional<DataTypes.AbstractDataType>;
  declare movieId : string;
  declare personId : string;
  declare role : string;
}