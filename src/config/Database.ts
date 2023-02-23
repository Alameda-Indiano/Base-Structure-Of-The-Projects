import { Sequelize } from "sequelize";

const ConfigDatabase = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, 
    underscored: true,
    updatedAt: true
  }
})

export default ConfigDatabase;
