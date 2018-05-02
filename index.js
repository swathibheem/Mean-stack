const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.promise = global.promise;
mongoose.connect(config.uri, (err) => {
	if(err){
		console.log('could not connect to dtabase:', err);
	}
	else{
		console.log(config.secret);
		console.log('connected to the dtabase:' + config.db);
	}
});
app.use(express.static(__dirname +'/client/dist/'));

app.get('*', (req, res) => {
  res.sendFile(path.json(__dirname +'/client/dist/index.html'));
});

app.listen(3000, () => {
	console.log('listening o port 3000');
});