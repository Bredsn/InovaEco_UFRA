document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Coleta os dados do formulário
    const empresa = document.getElementById('empresa').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação simples para garantir que todos os campos foram preenchidos
    if (!empresa || !Descrição || !telefone || !mensagem) {
        document.getElementById('form-response').innerText = "Por favor, preencha todos os campos!";
        document.getElementById('form-response').style.color = 'red';
        return;
    }

    // Simula o envio do formulário
    document.getElementById('form-response').innerText = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
    document.getElementById('form-response').style.color = 'green';

    // Limpa os campos após o envio
    document.getElementById('contact-form').reset();
});
