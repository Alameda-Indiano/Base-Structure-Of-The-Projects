import { Model, Optional } from 'sequelize'

interface IHellowordAttributes {
  id: number;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export interface IHellowordInput extends Optional<IHellowordAttributes, 'id'> {};
export interface IHellowordOuput extends Required<IHellowordAttributes> {};

class IHelloword extends Model<IHellowordAttributes, IHellowordInput> implements IHellowordAttributes {
  public id!: number
  public message!: string

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;


};

export default IHelloword