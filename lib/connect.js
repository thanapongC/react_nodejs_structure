
import mysql from 'promise-mysql';
import config from 'config'

//get variable from config/default or production
// let Hostname = config.get('HOSTNAME');

// Example Config
const Connectconfig = {
    host: "Hostname",
    user: "Databaseuser",
    password: "Databasepassword",
    database : "Databasename",
    connectionLimit: 100
};

const connect = mysql.createPool(Connectconfig);

export default connect
