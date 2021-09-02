const express=require("express");
const mongoose=require("mongoose");

const router=express.Router();
const CourseModel = mongoose.model("course");

router.get("/add", (req, res)=>{
    res.render("add");
});

router.post("/add", (req, res)=>{
    var course = new CourseModel();
    course.cname = req.body.cname;
    course.salary = req.body.amount;
    //people.mno = req.body.mno;
    course.save((err, doc)=>{
        if(!err){
            res.redirect("/course/list");
        }else {
            res.send("Error Occured");
        }
    });
    //res.render("add");
});

router.get("/list", (req, res)=>{
    //Getting
    CourseModel.find((err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("list", {data: docs});
        }
    })
});

module.exports = router;
