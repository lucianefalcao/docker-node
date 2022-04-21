const express = require('express')
const app = express()
const port = 3000

const config = {
  host: 'db_node',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const mysql = require('mysql')

app.get('/', (req, res) => {

  const connection = mysql.createConnection(config)

  const sql = "INSERT INTO people(name) values('Luciane');"
  connection.query(sql)

  connection.query('SELECT * FROM people', (err, response) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <br>
      <ul>
        ${response.map(user => `<li>${user.name}</li>`)}
      </ul>
    `)
  })

  connection.end()

})

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})