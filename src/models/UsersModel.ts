import {
    Model, 
    InferAttributes, 
    InferCreationAttributes, 
    CreationOptional, 
    DataTypes, 
    Association, 
    HasManyCreateAssociationMixin, 
    NonAttribute,
    HasManyGetAssociationsMixin,
    Sequelize
} from 'sequelize';

import { IModels } from '.';
import { Projects } from './ProjectsModel';

export class Users extends Model<InferAttributes<Users, { omit: 'projects' }>, InferCreationAttributes<Users, { omit: 'projects' }>> {

    declare id: CreationOptional<number>;
    declare name: string;
    declare email: string;
    declare password: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    declare projects?: NonAttribute<Projects[]>;
    declare createProject: HasManyCreateAssociationMixin<Projects, 'userId'>;
    declare getProjects: HasManyGetAssociationsMixin<Projects>;

    declare static associations: {
        projects: Association<Users, Projects>;
    };

}

export const UsersModel = {
    init: (sequelize: Sequelize) => {
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
    },

    associate(models: IModels) {
        Users.hasMany(models.Projects);
    }
}