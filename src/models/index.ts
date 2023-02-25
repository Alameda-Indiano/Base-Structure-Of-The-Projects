import { ProjectsModel, Projects } from "./ProjectsModel";
import { UsersModel, Users } from "./UsersModel";

export interface IModels {
    Users: typeof Users;
    Projects: typeof Projects;
};

interface IModelsArray {
    init: (sequelize: any) => void;
    associate(models: IModels): void;
}[]

export const models: Array<IModelsArray> = [
    UsersModel,
    ProjectsModel
];