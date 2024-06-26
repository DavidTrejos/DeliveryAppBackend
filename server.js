 const express = require('express')
 const app = express();
 const http = require('http');
 const server = http.createServer(app);
 const logger = require('morgan');
 const cors = require('cors');
 const passport = require('passport');
 const multer = require('multer');

 /*
 * IMPORT ROUTES
 */

 const usersRoutes = require('./routes/userRoutes')

 const port = process.env.PORT || 9001;

 app.use(logger('dev'));
 app.use(express.json());
 app.use(express.urlencoded({
    extended: true
 }));
 app.use(cors());
 app.use(passport.initialize());
 app.use(passport.session());

 require('./config/passport')(passport);
 app.disable('x-powered-by');

 app.set('port',port);

 const upload = multer({
      storage: multer.memoryStorage()
 });

 /*
 * CALL ROUTES
 */

 usersRoutes(app,upload);

 server.listen(9001, '192.168.1.4' || 'localhost' ||'127.0.0.1', function(){
    console.log('Aplicación de NodeJS ' + port + ' Iniciada...')
 });

 app.get('/', (req,res) => {
    res.send('Ruta raíz del backend')
 });

 app.get('/test', (req,res) => {
    res.send('Test Root')
 });



 //ERROR HANDLER

app.use((err,req,res,next)=> {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});