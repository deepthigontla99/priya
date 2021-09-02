const connection = require("./models");
const handlebars=require('handlebars');
const express = require("express");
const application = express();
const path = require("path");
const expresshandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const PeopleController = require("./controller/people");
const CourseController=require("./controller/course");
const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access");
application.use(bodyparser.urlencoded({
    extended:true
}));

application.set('views', path.join(__dirname, "/views/"));

application.engine("hbs", expresshandlebars({
    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutsDir: __dirname + "/views/layouts",
    handlebars:allowInsecurePrototypeAccess(handlebars)
}));

application.set("view engine", "hbs");

application.get("/", (req, res)=>{
    //res.send("<h1>Hello</h1>");
    res.render("index",{});
});

application.use("/people", PeopleController);
application.use("/course",CourseController);
application.listen('3000');
