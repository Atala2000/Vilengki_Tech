import express from 'express';
import router from './routes/routes.js';
import session from 'express-session';
import cors from 'cors';


const app = express();

const corsOptions = {
    origin: 'http://localhost:5173', // The URL of your React app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use('/api', router);

const port = process.env.PORT || 5600;
app.listen(port, () => {
    console.log("Port "+port+" is doing just fine!");
})