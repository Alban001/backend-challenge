"use strict";var fs=require("fs"),express=require("express"),app=express();process.env.DISABLE_XORIGIN||app.use((function(e,s,t){var n=e.headers.origin||"*";(!process.env.XORIG_RESTRICT||["https://narrow-plane.gomix.me","https://www.freecodecamp.com"].indexOf(n)>-1)&&(s.setHeader("Access-Control-Allow-Origin",n),s.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")),t()})),app.use("/public",express.static(process.cwd()+"/public")),app.route("/_api/package.json").get((function(e,s,t){fs.readFile(__dirname+"/package.json",(function(e,n){if(e)return t(e);s.type("txt").send(n.toString())}))})),app.route("/").get((function(e,s){s.sendFile(process.cwd()+"/views/index.html")})),app.use((function(e,s,t){s.status(404),s.type("txt").send("Not found")})),app.use((function(e,s,t,n){e&&t.status(e.status||500).type("txt").send(e.message||"SERVER ERROR")}));const listener=app.listen(process.env.PORT||3e3,(function(){}));