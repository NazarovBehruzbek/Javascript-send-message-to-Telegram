
    const form = document.getElementById('telegramForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;

        sendToTelegramBot(name, surname);
    });

    function sendToTelegramBot(name, surname) {
        const token = '7023799405:AAFaIw6mRYGCAoDTn2rukq888nm_znSi7uI';
        const chatId = '7045653787';

        const message = `Name: ${name}\nSurname: ${surname}`;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const params = {
            chat_id: chatId,
            text: message,
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Message sent successfully:', data);
            alert('Message sent successfully to Telegram!');
        })
        .catch(error => {
            console.error('Error sending message:', error);
            alert('Failed to send message to Telegram. Please try again.');
        });
    }
