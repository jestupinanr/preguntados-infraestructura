import mysql from 'promise-mysql';
import keys from './keys'

const conn = mysql.createPool(keys.database);

conn.getConnection()
    .then(connection =>{
        conn.releaseConnection(connection);
        console.log('DB is connected');
    });

    export default conn;