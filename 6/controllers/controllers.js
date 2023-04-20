const {ObjectId}=require('mongodb')
const {addComments,getAllComments,findComment}=require('../services/service')
const {getDB,start}=require('../config/connDB')


let db;


start((err) => {
    if (!err) {
        db = getDB();
    }else{
        console.log(`DB connection error: ${err}`);
    }
})

async function getComments(req, res){
    res.status(200).send(await getAllComments(db))
}

async function getMyComments(req, res){
    if (ObjectId.isValid(req.params.id)){
        const result = await findComment(db, req.params.id)
        res.status(200).send(result)
    }else{
        res.status(400).send("id param is not valid")
    }
}

async function postAddComments(req, res){
    const {name, text} = req.body;

    if (name && text){

        addComments(db, {name, text}).then(() => {
            res.status(200).send("data send")
        })
    }else{
        res.status(400).send("Error: No data input");
    }
}

module.exports={
    getComments,
    getMyComments,
    postAddComments
}