const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()

app.use(express.static(path.resolve(__dirname, 'public')))
app.set('view engine', 'html')
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'), (err) => {
    if (!err) {
      console.log('sccess')
    }
  })
})

app.listen(3000, () => console.log('starting at 3000'))