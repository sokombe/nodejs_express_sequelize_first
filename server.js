// we import express(the simple way to use nodejs) and cors to avoid conflit between ports
const express = require('express')
const cors = require('cors')

// we put express in a variable to use that properly
const app = express()

var corOptions = {
    origin: '*'
}


// midleware
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/productsRouter.js')
app.use('/api/products', router)




// testing api
app.get('/', (req, res) => {
    res.json({
        message: 'hello from api'

    })
})

// port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})