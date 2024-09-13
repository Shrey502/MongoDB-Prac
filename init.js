const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
        {
        from:"Yash",
        to: "Yashastri",
        msg: "Give me your book",
        created_at:new Date()
    },
    {
        from:"Shriyan",
        to: "Shriraang",
        msg: "Jay Shree Ram",
        created_at:new Date()
    },
    {
        from:"Ravan",
        to: "Rakshas",
        msg: "Jay Jay Hanuman",
        created_at:new Date()
    },
    {
        from:"Janhavi",
        to: "Srujan",
        msg: "Dhani kut gelat?",
        created_at:new Date()
    },
    {
        from:"Raj",
        to: "Parth",
        msg: "Send me notes",
        created_at:new Date()
    },
];

Chat.insertMany(allchats);
Chat.findOneAndUpdate({from:"Janhavi"},{msg:"Pass me the calculator"},{new:true}).then((res)=>{
    console.log("Updated");
})
.catch((err)=>{
    console.log(err);
})
// Chat.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })