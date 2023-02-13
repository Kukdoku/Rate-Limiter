const express = require('express');
const limiter = require('express-rate-limit')

const app = express()

// for All api call (DDos Attack)
app.use(limiter({
    windowMS:5000,
    max:5,
    message:{
        code:529,
        message:'bahut sari request aa gayi'
    }
}))

app.get('/',(req,res)=>{
    res.send('hello')
})

// for a specific api
const limitIt = limiter({
    windowMs:3000,
    max:1,
    message:{
        code:529,
        message:'not allowed'
    }
})

app.get('/some',limitIt,(req,res)=>{
    res.send('jadu')
})

app.listen(3003,()=>{
    console.log('connected')
})