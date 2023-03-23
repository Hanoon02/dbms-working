import express from 'express'
import mysql from 'mysql2'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const app = express();
const cors = require('cors')
app.use(cors())
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hanoon2002',
    database: 'shoppr'
});



app.get('/products' , (req, res) => {
    const q = 'SELECT * FROM shoppr.product';
    db.query(q, (err, result) => {
        if(err) throw err;
        res.send(result);
    }
    );
});

app.listen(8800, () => {
    console.log('Server is running on port 8800');
});