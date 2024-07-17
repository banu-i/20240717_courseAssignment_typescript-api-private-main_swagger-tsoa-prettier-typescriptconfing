// Define the Todo model

import { DataTypes, Model, Optional } from 'sequelize';
import todoSequelize from '../setup/database';
import { UserAttributes } from '../../interfaces/models/UserAttributes';

// Optional fields for model creation
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// Define the Todo model class
class UserModel
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;

  public name!: string;

  public email!: string;

  // Timestamps
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: todoSequelize,
    tableName: 'Users',
  },
);

export default UserModel;
