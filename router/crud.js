const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const Conatcts = mongoose.model("Contacts")

//fetch all data
router.get("/", (req, res) => {
    Conatcts.find() 
    .then(data=>{
        res.json({data})
    })
    .catch(err=>{
        console.log(err)
    })
});
//req.Conatcts = Conatctsdata .populate("postedBy","_id name")
//insert data

router.post('/',(req,res)=>{
    const {name,email,phone} = req.body
    if(!name || !email || !phone){
        return res.status(422).json({error:"please fill all the fields"}) 
     }
    const conatcts = new Conatcts({
        name,email,phone
    })
    conatcts.save().then(result=>{
        res.json({Conatcts:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

//delete Conatcts

router.delete('/:id',(req,res) =>{
    Conatcts.findOne({_id:req.params.id})
    .then(data=>{
        data.remove()
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
    })
})

//fetch Conatcts by id

router.get('/:id',(req,res) =>{
    Conatcts.findOne({_id:req.params.id})
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
    })
})

//update Conatcts

router.put('/:id',(req,res) =>{

    const {name,email,phone} = req.body
    if(!name || !email || !phone){
        return res.status(422).send("please fill all the fields") 
     }

    const Id  = req.params.id;
    Conatcts.findByIdAndUpdate({_id:Id}, { $set: {name: req.body.name ,email: req.body.email , phone: req.body.phone }},{new:true})
    .then(data =>{
        res.json(data)
    }).catch(err=>{console.log(err)})

})

module.exports = router