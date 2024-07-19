import { User, Admin } from "../models/models.js";
import Joi from 'joi'
import bcrypt from 'bcrypt';

export const SignUp = async (req, res) => {
    const {fullname, email, password, phone, county} = req.body;

    const userInfo = {
        fullname,
        email,
        password,
        phone,
        county
    }

    const schema = Joi.object({
        fullname : Joi.string().required(),
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(8).required(),
        phone : Joi.string().min(10).min(10).required(),
        county: Joi.string().required()
    });
    const result = schema.validate(userInfo);
    if(result.error){
        return res.status(400).send(result.error.details[0].message);
    }

    const saltrounds = 10;
    const salt = await bcrypt.genSalt(saltrounds);
    const hashedpassword = await bcrypt.hash(password, salt);

    await User.create({
        fullname : fullname,
        useremail : email,
        userpassword : hashedpassword,
        phone : phone,
        county : county
    });
    req.session.loggedin = true;
    req.session.useremail = email;
    console.log(req.session.useremail);
    res.status(200).json({
        "message" : "User signed up successfully"
    });


}

export const Login = async (req, res) => {
    const {email, password} = req.body;

    const userInfo = {
        email,
        password
    }

    const schema = Joi.object({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(8).required()
    });
    const result = schema.validate(userInfo);
    if(result.error){
        return res.status(400).send(result.error.details[0].message);
    }

    const saltrounds = 10;
    const salt = await bcrypt.genSalt(saltrounds);
    const hashedpassword = await bcrypt.hash(password, salt);

    const checkAdmin = await Admin.findOne({
        attributes : ['adminemail', 'adminpassword'],
        where : {
            adminemail : email,
            adminpassword : hashedpassword
        }
    });
    if(checkAdmin){
        req.session.loggedin = true;
        req.session.adminemail = email
        res.status(200).send({
            adminemail : email
        });
    }
    req.session.loggedin = true;
    req.session.useremail = email;
    res.status(200).send({
        useremail : email
    })
}

export const GetUsers = async(req, res) => {
    const getUsers = await User.findAll({
        attributes : ['fullname', 'useremail', 'phone', 'county']
    });
    res.status(200).json(getUsers); 
}

/*export const Adminuser = async(req, res) => {
    const {email} = req.body;
     const 

}*/