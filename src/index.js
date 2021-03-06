// const express = require('express')
// require('./db/mongoose')
// const User = require('./models/leave.js')

// const app = express()
// const port = process.env.PORT || 3000

// app.use(express.json())

// app.post('/leave', (req, res) => {
//     const user = new User(req.body)

//     user.save().then(() => {
//         res.send(user)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })

// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })

const express = require("express")
require('./db/mongoose.js')
const User = require('./models/leave.js')


const app  = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    const use = new User(req.body)

    use.save().then(()=>{
        res.send(use);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

app.listen(port, ()=> {
    console.log('Server is up on port' + port)
})
