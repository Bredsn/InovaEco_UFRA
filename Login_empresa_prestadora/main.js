const passwordAccess = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye);

    if (input && iconEye) {
        iconEye.addEventListener('click', () => {
            input.type = input.type === 'password' ? 'text' : 'password';
            iconEye.classList.toggle('ri-eye-line');
            iconEye.classList.toggle('ri-eye-close-line');
        });
    } else {
        console.error('Elementos não encontrados: verifique os IDs fornecidos.');
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Configurar a visibilidade da senha para login
    passwordAccess('password', 'loginPassword');
    // Configurar a visibilidade da senha para registro
    passwordAccess('passwordCreate', 'loginPasswordCreate');

    // Selecionar os elementos necessários
    const loginAccessRegister = document.getElementById('loginAccessRegister'),
          buttonRegister = document.getElementById('loginButtonRegister'),
          buttonAccess = document.getElementById('loginButtonAccess');

    // Ação para abrir o registro
    buttonRegister.addEventListener('click', () => {
        loginAccessRegister.classList.add('active'); // Adiciona a classe 'active' para mostrar a tela de registro
    });

    // Ação para voltar ao login
    buttonAccess.addEventListener('click', () => {
        loginAccessRegister.classList.remove('active'); // Remove a classe 'active' para mostrar a tela de login
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slideOut = document.getElementById('slide-out');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');

    // Abre e fecha o menu ao clicar no botão hambúrguer
    hamburgerBtn.addEventListener('click', () => {
        slideOut.classList.toggle('active');
        hamburgerBtn.style.display = slideOut.classList.contains('active') ? 'none' : 'flex';
        closeBtn.style.display = slideOut.classList.contains('active') ? 'block' : 'none';
    });

    // Fecha o menu ao clicar no botão de fechar
    closeBtn.addEventListener('click', () => {
        slideOut.classList.remove('active');
        hamburgerBtn.style.display = 'flex'; // Mostra o hambúrguer novamente
        closeBtn.style.display = 'none'; // Esconde o botão de fechar
    });
});
