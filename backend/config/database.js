import { Sequelize } from 'sequelize';

const db = new Sequelize('mern_db', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;