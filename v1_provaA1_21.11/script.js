document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var formMessages = document.getElementById('formMessages');

    formMessages.textContent = ''; // Clear previous messages

    if (password.length < 8) {
        formMessages.textContent += 'A senha deve ter pelo menos 8 caracteres.\n';
    }
    if (password !== confirmPassword) {
        formMessages.textContent += 'As senhas não coincidem.';
    }

    // Se não houver mensagens de erro, o formulário é considerado válido
    if (formMessages.textContent === '') {
        // Aqui você pode adicionar mais lógica para quando o formulário for válido
    }
});

document.getElementById('userForm').addEventListener('reset', function() {
    document.getElementById('formMessages').textContent = '';
});
