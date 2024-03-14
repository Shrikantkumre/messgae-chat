


let userInput = document.querySelector('input');
const sendButton = document.querySelector('button')
const chatcontainer = document.querySelector('.chatcontainer')

const responses = [
    {userInput: 'hi', response: 'Hello there'},
    {userInput: 'hello', response: 'Hello '},
    {userInput: 'how are you', response: 'I am fine. How are you?'},
    {userInput: 'good', response: 'Nice to hear'},
    {userInput: 'bye', response: 'Nice talking to you. Goodbye.'},
    

];

function sendMessage (){
    const userValue = userInput.value.trim();

    if(userValue !== ""){
        renderUserChat(userValue);
        userInput.value = '';
        
        const filteredResponses = responses.filter((item)=> userValue.toLowerCase().includes(item.userInput.toLowerCase())) 
        if(filteredResponses.length > 0){
            const responseMessage = filteredResponses[0].response;
            renderRobotChat(responseMessage);
        } else {
            renderRobotChat('I don\'t know ' + userValue)
        }
    }
}

function renderRobotChat(message){
    const roboDiv = document.createElement('div');
    roboDiv.classList.add('robot');
    roboDiv.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpmnSrdnP5K58XVJVQ6N9wF7lFvcAKk7URdpc8_bKaGDD9jyobEbcNEXcWfYW08gSYGk&usqp=CAU" alt="">
<div>${message}</div>`
    chatcontainer.appendChild(roboDiv) 
}

function renderUserChat(message){
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.innerHTML = ` 
    <img src="https://i.pinimg.com/736x/d5/59/bd/d559bd5ffda47d35f8d5ce8de8d6f325.jpg" alt="">
    <div>${message}</div>
    `
    chatcontainer.appendChild(userDiv) 
}

sendButton.addEventListener('click', sendMessage)

userInput.addEventListener('keyup', function (event){
    if(event.key === "Enter"){
        sendMessage()
    }
})
