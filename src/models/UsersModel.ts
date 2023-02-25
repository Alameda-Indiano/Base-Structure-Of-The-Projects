import {
    Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes
} from 'sequelize';

export class Users extends Model<InferAttributes<Users>, InferCreationAttributes<Users>> {

    declare id: CreationOptional<number>;
    declare name: string;
    declare email: string;
    declare password: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

}

export const UsersModel = {
    init: (sequelize: any) => {
        Users.init({
            id: {
                type: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        }, {
            sequelize,
            name: {
                singular: 'user',
                plural: 'users'
            }
        });
    }
}