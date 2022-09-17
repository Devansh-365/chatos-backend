const app = require('./app')

const {PORT} = process.env

app.listen(PORT, () => {
    console.log(`Server in running on port ${PORT}`)
})