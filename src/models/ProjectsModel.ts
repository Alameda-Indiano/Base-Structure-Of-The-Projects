import {
    Model, 
    InferAttributes, 
    InferCreationAttributes, 
    CreationOptional, 
    DataTypes
} from 'sequelize';


export class Projects extends Model<InferAttributes<Projects>, InferCreationAttributes<Projects>> {

    declare id: CreationOptional<number>;
    declare name: string;
    declare description: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

};

export const ProjectsModel = {
    init: (sequelize: any) => {
        Projects.init({
            id: {
                type: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        }, {
            sequelize,
            name: {
                singular: 'project',
                plural: 'projects'
            }
        });
    }
}
