document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var passwordError = document.getElementById('passwordError');

    if (password1.length < 8 || password2.length < 8) {
        passwordError.textContent = 'A senha deve ter pelo menos 8 caracteres.';
    } else if (password1 !== password2) {
        passwordError.textContent = 'As senhas não coincidem.';
    } else {
        passwordError.textContent = '';
        // Aqui você pode adicionar mais lógica para quando a senha for válida
    }
});
