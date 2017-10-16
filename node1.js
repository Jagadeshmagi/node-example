'use strict';
const Hapi = require('hapi');
const MySQL = require('mysql')

const server = new Hapi.Server();

//MySQL connection
const connection = MySQL.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'password',
     database: 'emp_details'
});

server.connection({
	host:'localhost',
	port:3002
})

server.route({
	method:'GET',
	path:'/',
	handler:function(request, reply){
		reply('Hello World!!!!');
	}
});

server.route({
	method:'GET',
	path:'/about',
	handler: function(request, reply){
		reply('I am in About Page')
	}
})

server.route({
	method:'GET',
	path:'/user/{uid}',
	handler:function(req, reply){
		const uid = req.params.uid

		connection.query('SELECT uid, username, email FROM users WHERE uid = "'+uid+'"', function(error, results, fields){
			console.log(results[0].username)
			const data = {
				userName: results[0].username, 
				userEmail:results[0].email
			}
			
			if(error) throw error;
			reply(data)
		})
	}
})

server.start((err)=>{
	if(err){
		throw err
	}
	console.log('Server running at :', server.info.uri)
})