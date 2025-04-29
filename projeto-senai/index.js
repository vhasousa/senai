const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Permite ler JSON no body das requisições

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123.qwe',
  database: 'testdb',
});

connection.connect();

app.post('/alunos', (req, res) => {
  const { nome, idade } = req.body;
  connection.query(
    'INSERT INTO alunos (nome, idade) VALUES (?, ?)',
    [nome, idade],
    () => {
      res.send('Aluno cadastrado com sucesso!');
    }
  );
});

app.listen(3001, () => {
  console.log('🚀 Backend rodando em http://localhost:3001');
});
