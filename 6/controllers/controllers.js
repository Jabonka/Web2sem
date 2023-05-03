const {ObjectId}=require('mongodb')
const {getAll, Create, findOneAny, Delete, Update}=require('../services/service')



async function login(req,res,next){
    try{
        const data=req.body
        if (data.name){
            const number=Math.floor(Math.random() * 1000)
            const result={
                "name":data.name,
                "api_key":number
            }
            await Create("users", result)
            res.send(`Succsessful registration, your api-key:${number}`)
        }
        else{
            res.send(400,'error')
        }
    }
    catch (err){
        next(err)
    }
}

async function DeleteAcc(req,res,next) {
    try {
        const id = req.params.id
        if (ObjectId.isValid(id)){
            await Delete("users",id)
            res.send('Account deleted')
        }
        else{
            res.send(400,'error delete')
        }
    }
    catch (err){
        next(err)
    }
}

async function getAllModels(req,res,next){
    try {
        res.send(await getAll("models"))
    }
    catch (err){
        next(err)
    }
}

async function getOneModel(req,res,next){
    try {
        const id = req.params.id

        if(ObjectId.isValid(id)){
            res.send(await findOneAny('models', req.params.id))
        }else{
            res.status(400).send("no valid id")
        }
    }catch (err) {
        next(err)
    }
}

async function createModels(req, res, next) {
    try {
        const data = req.body;
        if (data.name && data.name_model && data.type && data.model && data.description && data.comments){
            await Create("models", data)
            res.send("creating models")
        }else{
            res.status(400).send("no valid data")
        }
    }catch (err) {
        next(err)
    }
}

async function updateModel(req, res, next) {
    try {
        const data = req.body
        const id = req.params.id
        if (ObjectId.isValid(id)){
            if (data.name && data.name_model && data.type && data.model && data.description && data.comments){
                await Update("models", id, data)
                res.send("update model")
            }else{
                res.status(400).send("no valid data")
            }
        }else{
            res.status(400).send("no valid id")
        }
    }catch (err) {
        next(err)
    }
}

async function deleteModel(req, res, next) {
    try {
        const id = req.params.id
        if(ObjectId.isValid(id)){
            if (await Delete("models", req.params.id)){
                res.send("delete model")
            }else {
                res.status(400).send("no find model")
            }
        }else{
            res.status(400).send("no valid id")
        }
    }catch (err) {
        next(err)
    }
}


async function getComments(req, res, next){
    try {
        res.status(200).send(await getAll('comments'))
    }catch (err) {
        next(err)
    }
}

async function getMyComments(req, res){
    if (ObjectId.isValid(req.params.id)){
        const result = await findOneAny('comments',req.params.id)
        res.status(200).send(result)
    }else{
        res.status(400).send("id param is not valid")
    }
}

async function postAddComments(req, res,next){
    try {
        const data = req.body;

        if (data.name && data.text){
            await Create("comments", data)
            res.status(200).send("add comments")
        }else{
            res.status(400).send("Error: No data input")
        }
    }catch (err) {
        next(err)
    }
}

module.exports={
    getComments,
    getMyComments,
    postAddComments,
    getAllModels,
    login,
    DeleteAcc,
    getOneModel,
    createModels,
    updateModel,
    deleteModel
}