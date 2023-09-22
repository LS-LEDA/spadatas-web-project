const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors())


const db = mysql.createConnection({
    host: "localhost",
    user: 'USER',
    password: 'PASSWORD',
    database: 'spadatasweb'
});


app.get('/resources', (req, res) => {
    var isWhere = false;
    var sql = "SELECT r.Title as \"title\", r.Author as \"author\", r.Abstract_Note as \"description\", r.Url as \"link\" FROM Resource AS r";
    
    if (req.query.user != 'default') {
        isWhere = true;
        sql += "\nWHERE r.Manual_Tags LIKE '%raudience:" + req.query.user + "%'";
    }
    if (req.query.content != 'default') {
        if (!isWhere) {
            sql += "\nWHERE ";
            isWhere = true;
        } else { sql += "\nAND "; }
        sql += "r.Manual_Tags LIKE '%rcontent:" + req.query.content + "%'";
    }
    if (req.query.type != 'default') {
        if (!isWhere) {
            sql += "\nWHERE ";
            isWhere = true;
        } else { sql += "\nAND "; }
        sql += "r.Manual_Tags LIKE '%rtype:" + req.query.type + "%'";
    }
    if (req.query.language != 'default') {
        if (!isWhere) {
            sql += "\nWHERE ";
            isWhere = true;
        } else { sql += "\nAND "; }
        sql += "r.Manual_Tags LIKE '%rlanguage:" + req.query.language + "%'";
    }
    
    db.query(sql, (err, data) => {
        if(err) {
            console.log("Error while trying to process the petiton!\n");
            return res.json(err);
        }
        console.log("\n- Petition successful!");
        return res.json(data);
    })
});


app.listen(8081, () => {
    console.log("Listening for SQL petitions...");
});