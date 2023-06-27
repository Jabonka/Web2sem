var express=require('express');
const router = require('./api/v3/route')
const {Autorization, BadRequest, Morgan,Helmet, errorsValidations,swaggerDocs, originHeaderMiddleware} = require('./api/v1/middleware');
const bodyParser=require('body-parser');
const swaggerUI = require('swagger-ui-express')



var app=express();

const PORT=3000;
const host='127.0.0.1';



app.use(Helmet)
app.use(Morgan)

app.use(bodyParser.json());
app.use(express.static('public'))

app.use(originHeaderMiddleware)
app.use('/api/v3',Autorization, router); //уровень маршрутизатора
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.use(BadRequest) //уровень приложения
app.use(errorsValidations)


app.listen(PORT, host, () => {
    console.log(`Server starting on ${host}:${PORT}`)
})