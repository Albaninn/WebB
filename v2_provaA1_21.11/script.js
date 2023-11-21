document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var formMessages = document.getElementById('formMessages');

    formMessages.textContent = '';

    if (password.length < 8) {
        formMessages.textContent += 'A senha deve ter pelo menos 8 caracteres.\n';
    }
    if (password !== confirmPassword) {
        formMessages.textContent += 'As senhas não coincidem.';
    }

    if (formMessages.textContent === '') {
        alert("Usuario cadastrado com sucesso");
    }
});

document.getElementById('userForm').addEventListener('reset', function() {
    document.getElementById('formMessages').textContent = '';
});
