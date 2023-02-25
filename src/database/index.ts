import ConfigDatabase from "../config/Database";
import { Sequelize } from "sequelize";
import { models } from "../models";

class Database {

    private connection: Sequelize;

    constructor() {
        this.connection = ConfigDatabase;
        this.init();
        this.associate();
    };

    private init() {
        models.forEach((model) => model.init(this.connection));
    };

    private associate() {
        models.forEach((model: any) => {
            if (model.associate) {
                model.associate(this.connection.models);
            };
        });
    };
};

export default new Database();