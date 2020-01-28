const express = require('express');
const app = express();
const {create,read,update,deleteM} = require('./controllers/messagesController');
app.use(express.json());
app.use(express.static('public/build'));


app.get('/api/messages',read);
app.post('/api/messages',create);
app.put('/api/messages/:id',update);
app.delete('/api/messages/:id', deleteM)

const PORT = 3001; 
app.listen(PORT, console.log(`Server is on ${PORT}`))











// const express= require('express');
// const mesCont = require('./controllers/messages_controller')
// // const {createMessage, readMessage, updateMessage, deleteMessage}= require('./controllers/messages_controller')
// const app = express();
// //set up a body parser so that we have access to `req.body` 
// //in our endpoints. The express package we imported has a 
// //method on it called `.json` to do this.
// app.use(express.json())
// app.use(express.static(__dirname +'/../public/build'));


// const messageUrl = '/api/messages';

// app.post(messageUrl, mesCont.createMessage);
// app.get(messageUrl, mesCont.readMessage);
// app.put(`${messageUrl}/:id`, mesCont.updateMessage);
// app.delete(`${messageUrl}/:id`, mesCont.deleteMessage);

// const port = 3001;
// app.listen(port, ()=> console.log(`The server is listening on ${port}.`))