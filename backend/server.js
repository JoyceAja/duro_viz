const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex')

const database = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'yungao',
    password : '',
    database : 'duro'
  }
});

// database.select('*').from('viz').then(data => {
// 	// console.log(data);
// });

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) => {
	res.json('mainpage working');
})

app.post('/upload', (req,res) => {
	res.json('uploading');
})

app.get('/explore/:id', (req,res) => {
	// res.json('exploring');
	const { id } = req.params;
	database.select('*').from('viz').where({id}).then(data => {
		if (data.length) {
			res.json(data[0]);
		} else {
			res.status(400).json('not found')
		}
	}).catch(err => res.status(400).json('no such id'))
})

app.listen(3000, ()=>{
	console.log('app is running');
})