import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const product = db.define('products', {
    title: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    }
},
{
    freezeTableName: true
});

export default product;