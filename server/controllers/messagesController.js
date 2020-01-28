let messages =[];
let id = 0;

read = (req,res)=>{
    res.status(200).json(messages);
};

create = (req,res)=>{
    // let newMessage = {id, ...req.body};
    let newMessage = {id, text: req.body.text,time: req.body.time};
    messages.push(newMessage);
    console.log(newMessage)
    res.status(200).json(messages);
    id++;
};

update = (req,res)=>{
    let {id}= req.params;
    let {text} = req.body;
    // console.log(typeof id, id)

    // for (el of messages) console.log(messages[el])

    let index = messages.findIndex(el=> el.id === +id);
    // console.log(id, index, text)
    messages[index].text = text;


    // let targetMessage = messages[index];
    // targetMessage ={
    //     id: id,
    //     text: text || targetMessage.text,
    //     time: time || targetMessage.time
    // }
    res.status(200).json(messages);
    }



deleteM = (req,res)=>{
    let {id}= req.params;
    let index = messages.findIndex(el=>el.id === +id);
    messages.splice(index,1);
    res.status(200).json(messages);
}
module.exports={
    read,create,update,deleteM
}










// let messages = [];
// let id = 0;


// module.exports={
// createMessage: (req,res) => {
//     // const message = {
//     //     id,
//     //     text: req.body.text,
//     //     time: req.body.time,
//     // }
//     // messages.push(message);

//     const {text,time}= req.body;  
//     messages.push({text,time,id});
//     id++;
//     res.status(200).json(messages)
// },


// readMessage: (req,res) => {
//     res.status(200).json(messages)
// },

// updateMessage: (req,res) => {
//     const {id} = req.params;
//     const {text} = req.body;
//     // const updateID = req.params.id;
//     // const messageIndex = messages.findIndex(message => message.id == updateID);
//     const messageIndex= messages.findIndex( message => message.id == id);
//     let message = messages [messageIndex];
//     messages[messageIndex] ={
//         id: message.id,
//         text: text || message.text, 
//         time: message.time
//     }
//     res.status(200).json(messages)
// },

// deleteMessage: (req,res) => {
//     const {id}= req.params;
//     const messageIndex= messages.findIndex(message=>message.id == id);
//     messages.splice(messageIndex,1);
//     res.status(200).json(messages)
// }
// }








