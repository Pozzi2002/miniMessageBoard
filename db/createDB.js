const { Client } = require('pg');
require('dotenv').config()

const date = new Date().toISOString()
console.log(date)
const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
text VARCHAR (255), 
username VARCHAR (255),
added TIMESTAMP
);

INSERT INTO messages (text, username, added)
VALUES 
  ('Hi there', 'Amando', '${date}'),
  ('Hello World!', 'Charles', '${date}');
`
async function main() {
    console.log('Seeding')
    const client = new Client()
    await client.connect()
    await client.query(SQL)
    await client.end();
    
}
main()