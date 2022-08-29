import  express  from "express";
import { APP_PORT,DB_URL } from './config';
import errorHandler from "./middleware/errorHandler";
import mongoose from "mongoose";
import path from "path";
////call express function
const  app=express();
import routes from './routes'









// Database connection
mongoose.connect(DB_URL, {
   
    useUnifiedTopology: true,
    useNewUrlParser : true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected...');
});









global.appRoot = path.resolve(__dirname);

// to read multipart data
app.use(express.urlencoded({ extended: false }));


// app.use(auth)

// to read json
app.use(express.json());

// register route with application
app.use('/api',routes)

// use express .static inbuilt middlewar
app.use('/uploads',express.static('uploads'))




//register middleware // global
app.use(errorHandler);

app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}.`));