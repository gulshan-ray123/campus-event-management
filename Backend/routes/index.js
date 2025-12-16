var express = require('express');
var app = express.Router();

const register= require("../Controllers/Registration_auth");
const login= require("../Controllers/Login_auth");
const success= require('../Controllers/Success');
const userAuth= require('../Middleware/userProtected');
const validate=require('../Middleware/Validate_middleware');
const signUpSchema= require('../Validators/auth-Validators');
const eventRegisterRoute= require('../Controllers/Event_Reg');
const masterRegistration=require('../Controllers/Register_Master');
const userLogout= require('../Controllers/Logout');
const adminRegister= require('../Controllers/AdminRegistration');
const adminAuth= require('../Middleware/adminProtected');
const adminLogin= require('../Controllers/AdminLogin');
const organiserLogin= require('../Controllers/Organiser_auth');
const organiserAuth= require('../Middleware/organiserProtected');
const upload = require('../Middleware/upload');
const eventController = require('../Controllers/Scheduling'); 
const getSingleEvent= require('../Controllers/GetEvent');
const getEvent= require('../Controllers/GetAllEvent');
const qrDecoded= require('../Controllers/qrScanInfo');

// const QRsend= require('../Controllers/Scanner');
/* GET home page. */


app.route("/register").post(validate(signUpSchema),register);
app.route("/login").post(login);
app.route("/student/eventRegistration").post(userAuth,eventRegisterRoute);
app.route('/success').post(userAuth,success);
app.route('/Master/Register').post(masterRegistration);
app.route('/user/logout').get(userLogout);
app.route('/admin/register').post(adminRegister);
// app.route('/ScannerRoute').post(QRsend);
app.route('/admin/login').post(adminLogin);
app.route('/organiser-login').post(organiserLogin);
app.route('/api/scan').post(qrDecoded);

app.post(
  '/event/create',
  upload.fields([
    { name: 'eventBanner', maxCount: 1 },
    { name: 'guest_img1', maxCount: 1 },
    { name: 'guest_img2', maxCount: 1 },
    { name: 'guest_img3', maxCount: 1 },
  ]),
  eventController.scheduleEvent 
);

app.route('/event/all').get(getEvent);

app.route("/event/:eventID").get(getSingleEvent);



module.exports = app;
