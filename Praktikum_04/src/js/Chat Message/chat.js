function printchat() { 
    let valuechat = document.getElementById("ChatValue").value;   
    var chat = document.createElement("p");
    var chatnode = document.createTextNode(valuechat)
    chat.appendChild(chatnode);
    document.getElementById("ChatBox").appendChild(chat);
}