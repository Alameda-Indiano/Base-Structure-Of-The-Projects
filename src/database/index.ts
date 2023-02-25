import ConfigDatabase from "../config/Database";
import { models } from "../models";

class Database {

    private connection;

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