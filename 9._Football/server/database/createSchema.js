import db from "./createConnection.js";

const isInDeleteMode = true
if(isInDeleteMode){
    db.exec("DROP TABLE IF EXISTS players")
}

db.exec(`CREATE TABLE players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(60)
    )`)
if (isInDeleteMode) {
    db.run("INSERT INTO players (name) VALUES ('Messi')")
    db.run("INSERT INTO players (name) VALUES ('Ronaldo')")
    db.run("INSERT INTO players (name) VALUES ('Ronaldinho')")
}