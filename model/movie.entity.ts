import { Model, CreationOptional, InferAttributes, InferCreationAttributes, DataTypes} from "sequelize";

export class MovieEntity extends Model<InferAttributes<MovieEntity>,InferCreationAttributes<MovieEntity>> {
  declare id: CreationOptional<DataTypes.AbstractDataType>;
  declare title : string;
  declare releaseDate : Date;
  declare summary : string;
  declare speechLanguage : string;
}