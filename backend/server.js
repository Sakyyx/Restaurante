const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const Cliente = require('./backend/models/Cliente')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('API ok')
})

app.post('/clientes', async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body)
    res.status(201).json(cliente)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})