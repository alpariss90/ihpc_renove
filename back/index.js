const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const morgan=require('morgan')
const config=require('./src/config/config')
const { sequelize } = require('./src/provider')
const cookieParser = require('cookie-parser')
const session =require('express-session')



const app=express()


//app.use(bodyParser.json())
//app.use(morgan('combined'))

app.use(express.json({limit : '50mb',extended : true}))
app.use(express.urlencoded({limit : '50mb',extended : true}))

app.use(cookieParser());
/*app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });*/


  app.use((req, res, next)=>{
    console.log('--------------');
    console.log('----------------------');

    next()
  })

const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767klll",
    saveUninitialized:true,
    cookie: { maxAge: oneDay, secure: true },
    resave: false,
    saveUninitialized: false,
    unset: 'destroy' 
}));


var allowedOrigins = ['http://localhost:8100'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false); 
    }
    return callback(null, true);
  },credentials: true, 
  exposedHeaders: ['set-cookie'],
}));



/*
app.use(cors({
  origin: ['http://localhost:8101','https://localhost:8180'],
  credentials: true, 
  exposedHeaders: ['set-cookie'],
  methods: ['PUT']
}));*/


require('./src/route')(app)
    
  
//sequelize.sync({alter: true});

  
app.listen(config.app_port, (err)=>{
    console.log("App is runnig on "+config.app_port);
}) 