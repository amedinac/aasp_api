const { Sequelize } = require('sequelize');

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host:host,
        dialect:'mysql',
        dialectOptions: {
            ssl:{
                require: 'true'
            }
        }
    }
    
    
);

const dbConnectMysql = async () => {
    try{
        await sequelize.authenticate();
        console.log('Mysql connected');
    }catch(e){
        console.log('Connection Failed', e);
    }   
}

module.exports = { sequelize, dbConnectMysql}