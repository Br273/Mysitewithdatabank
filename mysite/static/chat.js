const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    appendMessage('Aluno', message, 'student');
    userInput.value = '';

    // Simulação de resposta do professor
    setTimeout(() => {
        const teacherResponse = getTeacherResponse(message);
        appendMessage('Professor', teacherResponse, 'teacher');
    }, 1000);
}

function appendMessage(sender, message, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Rola para a última mensagem
}

function getTeacherResponse(studentMessage) {
    const responses = {
        'Oi': 'Olá! Como posso te ajudar hoje?',
        'Qual é a melhor maneira de aprender violão?': 'Pratique diariamente e ouça muita música!',
        'Você pode me indicar uma música para começar?': 'Claro! Que tal "Stand By Me"? É uma ótima escolha para iniciantes.',
        'Como leio partituras?': 'Comece aprendendo as notas e a clave de sol. Existem muitos recursos online.',
    };

    return responses[studentMessage] || 'Desculpe, não entendi. Pode perguntar outra coisa?';
}
