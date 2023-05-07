// const mongoose =require('mongoose')
// mongoose.set("strictQuery", true);

// mongoose.connect("mongodb://localhost:27017").then(() => {
//     console.log("mongodb cluster connected sucessfully");
//   })
// // mongoose.connect("mongodb+srv://nodejsinterview:Fatma76@cluster0.ythmig4.mongodb.net/nodejsinterview").then(() => {
// //   console.log("mongodb cluster connected sucessfully");
// // })

//   .catch((err) => {
//     //("no connection");
//     console.log("no connection");
//   });


const mongoose = require("mongoose");
var username = encodeURIComponent("irkfaisal");
var password = encodeURIComponent("faisalmongodb");

const DB = `mongodb+srv://${username}:${password}@cluster0.7rcqr9a.mongodb.net/authmern?retryWrites=true&w=majority`

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("DataBase Connected")).catch((errr) => {
    console.log(errr);
})
