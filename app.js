const express = require('express')
const path = require('path')
const app = express()

app.get('/version', (req, res) => {
  res.send('1')
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')))

  app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})