let express = require("express");
let app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
let docter = [{
    name:'dawood',
    kidness:[{
        health:true
    }]
}]


app.get("/", (req, res) => {
    let kdneys = docter[0].kidness
    let nbrofkidneww = kdneys.length
    let healtykidnes = 0
    for (let i = 0; i < kdneys; i++) {
        if(kdneys[i].health){
            healtykidnes += 1
        }
        
        
    }
    let  unhealtykidness = nbrofkidneww - healtykidnes
    res.json({
        nbrofkidneww,
        healtykidnes,
        unhealtykidness
    })
});



app.post("/",(req,res)=>{
    let isHealty = req.body
    docter[0].kidness.push({isHealty})
    res.json({
        msg:'kidney is added'
    })
})

app.listen(3000);


