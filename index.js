const express = require('express');
const app = express();
const path=require('path');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.get('/',(req,res)=>{
    
    res.send("hello")
})

app.get('/api/filterdata/independentData',(req,res)=>{
    const result={
        Scenario:[ "Scenario 1","Scenario 2","Scenario 3"],
        Region  :[ "Region 1","Region 2","Region 3"],
        Market  :[ "Market 1","Market 2","Market 3"],
        Platform:[ "Platform 1","Platform 2","Platform 3"]
    }
    
    res.send(result)
})

app.get('/api/filterdata/dependentData/dependentdata/Platform/:Platform',(req,res)=>{
    const result=["Segment1","Segment2","segment3"]
    res.send(result)
})
app.get('/api/filterdata/dependentData/dependentdata/Segment/:Segment',(req,res)=>{
    const result=[ "ProductGroup 1","ProductGroup 2","ProductGroup 3"]
    res.send(result)
})
app.get('/api/filterdata/dependentData/dependentdata/Productgroup/:Productgroup',(req,res)=>{
    const result=[ "Procedure 1","Procedure 2","Procedure 3"]
    res.send(result)
})

app.listen(3000||process.env.PORT,()=>{
    console.log("server on!");
})