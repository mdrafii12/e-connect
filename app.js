// script.js
document.getElementById('post-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const postContent = e.target.querySelector('textarea').value;
    const postDiv = document.createElement('div');
    postDiv.textContent = postContent;
    document.querySelector('#posts').appendChild(postDiv);
    e.target.reset();
});

document.getElementById('message-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const messageContent = e.target.querySelector('input[type="text"]').value;
    const messageDiv = document.createElement('div');
    messageDiv.textContent = messageContent;
    document.getElementById('message-list').appendChild(messageDiv);
    e.target.reset();
});

// AI Chat functionality
const aiChat = document.getElementById('ai-chat');
const chatContainer = document.getElementById('chat-container');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

aiChat.addEventListener('click', function() {
    aiChat.classList.toggle('expanded');
    if (aiChat.classList.contains('expanded')) {
        chatContainer.style.display = 'flex';
    } else {
        chatContainer.style.display = 'none';
    }
});

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        appendMessage('user', message);
        userInput.value = '';
        getAIResponse(message);
    }
}

function getAIResponse(message) {
    // Here you would typically send the message to your AI backend
    // For this example, we'll use a simple rule-based response
    let aiResponse = '';
    if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
        aiResponse = "Hello! How can I assist you today?";
    } else if (message.toLowerCase().includes('help')) {
        aiResponse = "I'm here to help. What do you need assistance with?";
    } else if (message.toLowerCase().includes('bye') || message.toLowerCase().includes('goodbye')) {
        aiResponse = "Goodbye! Have a great day!";
    } else {
        aiResponse = "I'm sorry, I don't understand. Could you please rephrase your question?";
    }
    
    setTimeout(() => {
        appendMessage('ai', aiResponse);
    }, 1000);
}

function appendMessage(sender, content) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = content;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
