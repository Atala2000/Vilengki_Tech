import express from 'express';
import router from './routes/routes.js';
import session from 'express-session';

const app = express();
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