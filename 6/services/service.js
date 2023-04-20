const {ObjectId}=require('mongodb')

async function addComments(db, data){
    const comments = db.collection("comments")
    await comments.insertOne(data)
}

async function getAllComments(db){
    const comments  = db.collection("comments")
    const result    = await comments.find()
    return  result.toArray()
}

async function findComment(db, id){
    const comments  = db.collection("comments")
    return await comments.findOne({_id: new ObjectId(id)})
}

module.exports={
    addComments,
    getAllComments,
    findComment
}