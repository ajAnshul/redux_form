var express = require('express');
var app = require('express')();
app.use(express.static(__dirname+'/common-ui'));


app.listen(8081,function(){
  console.log("running 8081");
})
