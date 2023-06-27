const morgan=require('morgan');
const helmet=require('helmet');
const {getApiKeys}=require('../../services/service')

const Helmet=helmet();
const Morgan=morgan('tiny');
const swaggerJSDoc=require('swagger-jsdoc')

function originHeaderMiddleware(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, api_key");

    if (req.method === "OPTIONS") {
        res.status(200).send();
    }
    else {
        next();
    }
}

function Validation(req, res, next) {
    const userInput = req.body;
    const regex = /[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    let af = regex.test(userInput)
    if (af) {
        return res.send(400,'Неправильный формат ввода');
    }
    next();
}

async function Autorization(req,res,next) {
    const keys = await getApiKeys()
    let api=Number(req.headers["api_key"]);
    if (keys) {
        if (!keys.includes(api) && req.method !== "GET" && req.url !== "/login") {
            console.log("нет апи")
            return res.status(403).send('access denied')
        }else{
            next()
        }
    }else{
        res.send('not apikey in databases')
    }
}

function errorsValidations(err, req, res, next) {
    res.status(err.status).send(err.message)
}

function BadRequest(req,res) {
    res.send(400,'Неправильный запрос');
}

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info:{
            title: "Лабораторная работа 10",
            version: "1.0.0",
            contact: {
                name: "jabonka",
            },
        },
        servers: [
            {
                url: `http://127.0.0.1:3000/api/v3`
            },
        ],
        tags:[
            {
                name: "Home",
                description: "Home page",
            },
            {
                name: "Comments",
                description: "CRUD для комментариев"
            },
            {
                name: "Models",
                description: "CRUD для моделей",
            },
            {
                name: "API",
                description: "Создание и удаление api-key",
            },
        ],
    },
    apis: ['api/v3/documentation.yaml']
}

const swaggerDocs=swaggerJSDoc(swaggerOptions)

module.exports = {
    BadRequest,
    Autorization,
    Validation,
    Helmet,
    Morgan,
    errorsValidations,
    swaggerDocs,
    originHeaderMiddleware
}