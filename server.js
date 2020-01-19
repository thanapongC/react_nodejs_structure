import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import auth from "./middlewere/auth";
import cookieParser from "cookie-parser";
import cors from "cors";
import config from "config";
import session from "express-session";
import morgan from "morgan";
import winston from "./winstonconfig/winston";

// use .env config
let PORT = config.get('PORT');

//set use MVC model in App Floder
function setupRoutes(app) {
  const APP_DIR = `${__dirname}/app`;
  const features = fs
    .readdirSync(APP_DIR)
    .filter(file => fs.statSync(`${APP_DIR}/${file}`).isDirectory());

  features.forEach(features => {
    const router = express.Router();
    const routes = require(`${APP_DIR}/${features}/routes.js`);
    routes.setup(router);
    app.use(`/${features}`, router);
  });
}

export function setup() {
  const app = express();

  //test Mysql Cooncect

  //   const connection = mysql.createConnection({
  //     host: Hostname,
  //     user: Databaseuser,
  //     password: Databasepassword,
  //     database: Databasename,
  //     connectionLimit: 100
  //   });

  //   connection.connect(function(err) {
  //     if (err) {
  //       console.error("Error connecting: " + err.stack);

  //       return;
  //     }
  //     console.log("Connected to  " + `${Databasename}` + "  is success");
  //   });

  connection.end();

  app.use(function(err, req, res, next) {
    // set locals, only providing error in development

    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV === "production" ? err : {};

    // add this line to include winston logging
    // winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    winston.error(`${err.status || 500} - ${err.message}`);

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });


  var corsOptions = {
    // origin: `${Domainname}`,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    exposedHeaders: ["x-auth-token"]
  };

  app.use(morgan("combined", { stream: winston.stream }));
  app.use(cors(corsOptions))
  app.use(auth);
  // app.use(express.static(__dirname + '/default floder'))
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
  );
  setupRoutes(app);

  app.listen(PORT, () => console.log("Server Side run port : " + PORT));
}
