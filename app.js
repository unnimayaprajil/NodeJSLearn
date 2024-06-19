const express = require('express')
const app =express()

app.get('/',(req,res)=>{
    res.send('<h2>hello world</h2>')
})
app.get('/about',(req,res)=>{
    res.json({'success':false})
})
app.listen(3000,()=>console.log('listen  3000'))